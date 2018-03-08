@NgModule({
 ...
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    StorageProvider,
    AndroidPermissions,
    NativeStorage,
   // DeviceAccounts, It doesn't work
    LoginProvider,
    CardProvider,
    Facebook,
    AppAvailability,
    InAppBrowser,
    SMS,
    //EmailComposer It doesn't work
  ]
})
export class AppModule {}
