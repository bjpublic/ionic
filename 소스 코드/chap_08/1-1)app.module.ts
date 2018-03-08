import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';

@NgModule({
  ...
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
