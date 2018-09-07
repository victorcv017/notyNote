import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {

  title:string;
  text:string;
  photo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private camera: Camera) {
  }

  saveNote(){
    console.log('Storage driver ', this.storage.driver);
    
    this.storage.set(this.title,{'value':this.text,'fav':false});
    console.log('save');
    this.navCtrl.pop();
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.photo = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
    
  }
}
