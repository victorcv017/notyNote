import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  notes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, private storage: Storage) {
    this.notes = this.getNotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.events.publish('show', true);
  }

  getNotes() {
    var result = [], val;
    this.storage.forEach((value, key, index) => {
      console.log(value);
      if (value['fav']) {
        val = value['value'];
        result.push({ key, val });
      }
      //console.log(result);
    });
    return result;
  }

  unfavorite(e) {
    e.item._elementRef.nativeElement.hidden = "true";
    var item = e.item._elementRef.nativeElement.innerText;
    console.log(".", item, ".");
    var key = item.trim();
    console.log(key);
    this.storage.get(key).then((val) => {
      val['fav'] = false;
      this.storage.set(key, val);
      //console.log(val);
    });
  }

  delete(e) {
    e.item._elementRef.nativeElement.hidden = "true";
    var item = e.item._elementRef.nativeElement.innerText;
    console.log(".", item, ".");
    var key = item.trim();
    console.log(key);
    this.storage.remove(key);
  }
}
