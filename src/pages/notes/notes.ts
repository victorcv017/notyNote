import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

  ionViewWillEnter(){
    this.events.publish('show', true);
  }

}
