import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesPage } from './notes';
import { AppModule } from '../../app/app.module';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    NotesPage,
  ],
  imports: [
    IonicPageModule.forChild(NotesPage),
    AppModule,
    Camera
  ],
})
export class NotesPageModule {}
