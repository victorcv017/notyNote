import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { NotesPage } from '../notes/notes';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  error : any;
  userData = null;
  constructor(private fb: Facebook, public events: Events, public navCtrl: NavController) {
    events.subscribe('error', (value) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome');
      this.error = value;
    });
  }
  ionViewWillEnter() {
    this.events.publish('show', false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginWithFB() {
    console.log("login");
    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
      .then((res: FacebookLoginResponse) => {
        if (res.status == "connected") {
          var fb_id = res.authResponse.userID;
          var fb_token = res.authResponse.accessToken;
          this.fb.api('/me?fields=id,name,email,picture.width(500).height(500)', []).then((user) => {
            this.userData = { email: user.email, gender: user.gender, username: user.name, picture: user.picture.data.url, pic: user.picture };
            this.navCtrl.setRoot(ProfilePage, { data: this.userData });
          });

        }
        else {
          console.log("Error...");
        }
      })
      .catch((e) => {
        console.log('Error al iniciar sesión', e);
        //this.error = e;
      });
  }
}
