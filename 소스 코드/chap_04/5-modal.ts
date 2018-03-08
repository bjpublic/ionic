import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  userId;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
      this.userId=this.navParams.get("userId");
  }

  dismiss(){
      this.viewCtrl.dismiss();
  }
}
