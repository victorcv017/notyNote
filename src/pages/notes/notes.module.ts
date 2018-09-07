import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotesPage } from './notes';
import { AppModule } from '../../app/app.module';

@NgModule({
  declarations: [
    NotesPage,
  ],
  imports: [
    IonicPageModule.forChild(NotesPage),
    AppModule
  ],
})
export class NotesPageModule {}
