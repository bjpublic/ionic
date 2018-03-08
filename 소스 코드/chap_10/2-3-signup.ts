  checked(){
    console.log("checked comes");
    if(!this.agreement){
        this.agreement=true;
        this.buttonColor={'color':'white',
                          'background-color':'#6441a5'
                        };
    }else{
        if(!this.email || !this.validateEmail(this.email)){
            let alert = this.alertCtrl.create({
                      title: '정상 이메일을 입력해주시기 바랍니다.',
                      buttons: ['OK']
                  });
                  alert.present();
            return;
        }
        if(this.password!=this.passwordConfirm){
            let alert = this.alertCtrl.create({
                        title: '결제 비밀번호가 일치하지 않습니다.',
                        buttons: ['OK']
                    });
            alert.present();       
            return false;
        }
        //save login info, password into NativeStorage and then move into ShopPage
        this.storageProvider.saveId(this.navParams.get("type"),this.navParams.get("id"),this.email);
        console.log("password:"+this.password);
        this.storageProvider.savePassowrd(this.password);
        this.navCtrl.setRoot(ShopPage);
    }
  }
