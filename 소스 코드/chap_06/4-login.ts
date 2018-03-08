...
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
username:string;
  password:string;

  usernamePlaceHolder:string="아이디를 입력해주세요";
  passwordPlaceHolder:string="비밀번호를 입력해주세요";

  constructor(private serverProvider:ServerProvider,
            public navCtrl: NavController, public navParams: NavParams,
            public events: Events,
            private alertController:AlertController) {
              
    events.subscribe('out-of-date', () => {
        let alert =this.alertController.create({
                        title:'앱을 업데이트 해주시기 바랍니다.',
                        buttons:['OK']
                    });  
             alert.present();     
    });

  }

  ...
}
