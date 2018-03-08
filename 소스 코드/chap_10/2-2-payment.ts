  pay(){
    if(this.cardIndex==-1){
        let alert = this.alertCtrl.create({
            title: '결제카드를 선택해주시기 바랍니다.',
            buttons: ['OK']
        });
            alert.present();       
            return;
    }

    if(this.storageProvider.payInfo[this.cardIndex].info.customer_uid==undefined 
        || this.storageProvider.payInfo[this.cardIndex].info.customer_uid.length==0){
      let alert = this.alertCtrl.create({
            title: '등록 카드정보에 오류가 있습니다.',
            buttons: ['OK']
        });
            alert.present();       
            return;            
    }
    this.navCtrl.push(PasswordPage, {class:"PasswordPage",callback: this.myCallbackPasswordFunction});
  }

 