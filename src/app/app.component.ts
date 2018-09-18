import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { NotesPage } from '../pages/notes/notes';
import { FavoritesPage } from '../pages/favorites/favorites';
import { NotePage } from '../pages/note/note';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { Facebook } from '@ionic-native/facebook';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
 



  pages: Array<{title: string, component: any, icon : any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events, private fb: Facebook, private push: Push) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Notas', component: NotesPage, icon: "document"},
      { title: 'Favoritas', component: FavoritesPage, icon: "heart"},
      { title: 'Perfil', component: ProfilePage, icon: "person"},
    ];

    events.subscribe('show', (value) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome');
      this.hiddenButton = value;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushSetup();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  public hiddenButton: boolean = true;
  createNote(){
    this.nav.push(NotePage);
    this.hiddenButton = false;
  }

  logout(){
    this.fb.logout();
    this.nav.setRoot(LoginPage);
  }
  
  pushSetup(){
    const options: PushOptions = {
      android: {
        senderID:'281256310979'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      }
    };

    const pushObject: PushObject = this.push.init(options);


    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
