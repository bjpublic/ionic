...
import { Media, MediaObject } from '@ionic-native/media';

@NgModule({
 ...
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
