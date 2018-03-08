import {AppDataProvider} from '../../providers/app-data/app-data';
...
export class HomePage {
  ... 
  appName:string;

  constructor(public navCtrl: NavController, appDataProvider:AppDataProvider) {
      this.appName=appDataProvider.getAppName();
  }
  
}
