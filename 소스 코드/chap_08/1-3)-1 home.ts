import { Component ,NgZone} from '@angular/core';
import { NavController,Platform ,LoadingController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

var page;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  imageURI;
  fileTransfer: FileTransferObject;
  
  public workoutProgress: string = '0' + '%';
  serverURI="http://www.takit.biz:8080/ocrFileSubmit";

  constructor(public navCtrl: NavController,private platform:Platform,
              private ngZone:NgZone,
              private camera: Camera,private transfer:FileTransfer) {
      page=this;          
      this.platform.ready().then(() => {
          this.fileTransfer=this.transfer.create();
      });
  }

...