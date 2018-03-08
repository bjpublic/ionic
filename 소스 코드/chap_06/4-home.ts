...
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  serverInfo:String;

  constructor(private serverProvider:ServerProvider,
      public navCtrl: NavController,
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
