...
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import {Clipboard} from '@ionic-native/clipboard';

@NgModule({
  ...
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    Clipboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
