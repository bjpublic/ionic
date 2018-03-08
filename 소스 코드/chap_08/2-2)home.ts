
import { AppAvailability } from '@ionic-native/app-availability';


declare var KakaoTalk:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
              private platform:Platform,
              private appAvailability: AppAvailability){
  }

  kakaologin(){
   this.doKakaoLogin().then((profile)=>{
       console.log("kakao login success");
   },(err)=>{
       console.log("kakao login failure");
   })
   
  }


    doKakaoLogin(){
      return new Promise((resolve,reject)=>{
   
      var scheme;
      if(this.platform.is('android')){
          scheme='com.kakao.talk';         
      }else if(this.platform.is('ios')){
          scheme='kakaotalk://';
      }else{
          console.log("unknown platform");
      }   
      console.log("ionic-scheme:"+scheme);

      console.log("ionic-scheme:"+scheme);
          this.appAvailability.check(scheme).then(
          ()=> {  // Success callback
              console.log(scheme + ' is available. call KakaoTalk.login ');
              KakaoTalk.login(
                    (userProfile)=>{
                        console.log("userProfile:"+JSON.stringify(userProfile));
                        console.log('Successful kakaotalk login');
                        /* !!! Add App server login here !!!*/
                        resolve(userProfile);
                    },
                    (err)=> {
                        console.log('Error logging in');
                        console.log(JSON.stringify(err));
                        let reason={stage:"login_err",msg:err};
                        reject(reason); 
                    }
              ); 
          },
          (error)=>{  // Error callback
              
          });
    }
