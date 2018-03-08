
  facebookLogin(){
      this.loginProvider.loginSocialLogin("facebook").then((res:any)=>{
            this.navCtrl.push(SignupPage,{type:"facebook",id:res.id});
      },err=>{
            let alert = this.alertCtrl.create({
                        title: '페이스북 로그인에 실패했습니다.',
                        buttons: ['OK']
                    });
            alert.present();       

      });
  }

  kakaoLogin(){
      this.loginProvider.loginSocialLogin("kakao").then((res:any)=>{
            this.navCtrl.push(SignupPage,{type:"kakao",id:res.id});
      },err=>{
            let alert = this.alertCtrl.create({
                        title: '카카오 로그인에 실패했습니다.',
                        buttons: ['OK']
                    });
            alert.present();       

      });  }

