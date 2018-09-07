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

@NgModule({
  declarations: [
    MyApp,
    NotesPage,
    FavoritesPage,
    NotePage,
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
    NotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
