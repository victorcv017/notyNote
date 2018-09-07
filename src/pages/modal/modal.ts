import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  constructor(private navParams: NavParams, private view: ViewController,  private storage: Storage) {
  }


  ionViewDidLoad() {
    const data = this.navParams.get('data');
    this.origData = data;
    this.title = data['key'];
    this.text = data['val'];
    //console.log(data['val']);
  }

  closeModal(){
    //this.storage.set(this.title,{'value':this.text,'fav':false});
    
    this.view.dismiss(this.origData);

  }

  updateNote(){
    const newData ={
      key:this.title,
      val:this.text
    };
    this.view.dismiss(newData);
  }

}
