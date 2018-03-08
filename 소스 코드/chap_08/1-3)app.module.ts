...
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
...
@NgModule({
  ...
  providers: [
    Camera,
    FileTransfer,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ]
})
export class AppModule {}
