import { Clipboard } from '@ionic-native/clipboard';
import { platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(platform:Platform, public navCtrl: NavController,private clipboard: Clipboard) {
    platform.ready().then(()=>{
         this.clipboard.copy('This is test');
    });
  }
}
