import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  userData = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage : Storage, public events: Events) {
    if(navParams.get('data')){
      this.storage.set('userdatax1', navParams.get('data'));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }
  ionViewWillEnter() {
    this.events.publish('show', false);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.storage.get('userdatax1').then(res => {
      this.userData = res;
    });
  }
  

}
