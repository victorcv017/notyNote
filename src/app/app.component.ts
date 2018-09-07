import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { NotesPage } from '../pages/notes/notes';
import { FavoritesPage } from '../pages/favorites/favorites';
import { NotePage } from '../pages/note/note';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NotesPage;


  pages: Array<{title: string, component: any, icon : any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Notas', component: NotesPage, icon: "document"},
      { title: 'Favoritas', component: FavoritesPage, icon: "star"}
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

  
  
}
