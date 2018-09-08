import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  title: string ='';
  text: string = '';
  origData:any[];
  photo : any;
  hasPhoto : boolean = false;
  constructor(private navParams: NavParams, private view: ViewController,  private storage: Storage, private camera: Camera,private socialSharing: SocialSharing) {
  }


  ionViewDidLoad() {
    const data = this.navParams.get('data');
    this.origData = data;
    console.log(data);
    this.title = data['key'];
    this.text = data['val'];
    if (typeof data['photo'] !== 'undefined'){
      this.photo = data['photo'];
      this.hasPhoto = true;
    }
    
    //console.log(data['val']);
  }

  closeModal(){
    //this.storage.set(this.title,{'value':this.text,'fav':false});
    
    this.view.dismiss(this.origData);

  }

  updateNote(){
    const newData ={
      key:this.title,
      val:this.text,
      photo: this.photo
    };
    this.view.dismiss(newData);
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
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
    //this.photo = "hola";
  }
  share(){
    this.socialSharing.shareViaWhatsApp(this.text,this.photo);    
  }
}
