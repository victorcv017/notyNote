import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { NotePage } from './note';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    NotePage,
  ],
  imports: [
    IonicPageModule.forChild(NotePage)
  ],
})
export class NotePageModule {}




