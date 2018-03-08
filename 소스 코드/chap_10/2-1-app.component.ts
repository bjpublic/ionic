export class MyApp {
  rootPage:any;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private loginProvider:LoginProvider,              
              private storageProvider:StorageProvider) {
    platform.ready().then(() => {
      this.storageProvider.readId().then((res:any)=>{
          this.loginProvider.loginSocialLogin(res.type).then((obj:any)=>{
            if(obj.id==res.id){ 
              this.rootPage=ShopPage;
            }else{
              this.rootPage=LoginPage;
            }
          });
      },err=>{
          this.rootPage=LoginPage;
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

