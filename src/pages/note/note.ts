import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

  title:string;
  text:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  saveNote(){
    this.storage.set(this.title,{'value':this.text,'fav':false});
    console.log('save');
    this.navCtrl.pop();
  }
}
