import { Camera, CameraOptions } from '@ionic-native/camera';
...
@NgModule({
   ...
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
