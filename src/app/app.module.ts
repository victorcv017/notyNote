import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NotesPage } from '../pages/notes/notes';
import { FavoritesPage } from '../pages/favorites/favorites';
import { NotePage } from '../pages/note/note';

import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera } from '@ionic-native/camera';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    NotesPage,
    FavoritesPage,
    NotePage,
    ProfilePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotesPage,
    FavoritesPage,
    NotePage,
    ProfilePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
  ]
})
export class AppModule {}
