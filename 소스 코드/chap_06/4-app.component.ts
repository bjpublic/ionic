
import { Platform ,AlertController,Events} from 'ionic-angular';
...

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, 
              private storageProvider:StorageProvider,
              private serverProvider:ServerProvider,
              statusBar: StatusBar, splashScreen: SplashScreen,
              private alertController:AlertController,public events: Events) {

    events.subscribe('out-of-date', () => {
        let alert =this.alertController.create({
                        title:'앱을 업데이트 해주시기 바랍니다.',
                        buttons:['OK']
                    });  
             alert.present();     
    });
...
}

