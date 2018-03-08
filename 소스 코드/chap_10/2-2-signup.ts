          androidPermissions.checkPermission(androidPermissions.PERMISSION.SEND_SMS).then((status)=> {
              androidPermissions.requestPermission(androidPermissions.PERMISSION.SEND_SMS).then((status)=>{
                  if( status.hasPermission ){
                  }else{
                    let alert = this.alertCtrl.create({
                              title: '문자전송허가 없이는 앱가입이 불가능합니다.',
                              buttons: ['OK']
                          });
                          alert.present(); 
                          return;                   
                  }
              });
          });
    }
      cordova.plugins.email.isAvailable((available)=>{
        console.log("hasAccount:"+available);
        if(!available) {
                    let alert = this.alertCtrl.create({
                              title: '이메일 계정 없이는 앱가입이 불가능합니다.',
                              buttons: ['OK']
                          });
                          alert.present(); 
                          return;                   
        }
      });   

  