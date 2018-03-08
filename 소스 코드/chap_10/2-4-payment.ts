            if( password==_params){
                this.cardProvider.payCard(this.storageProvider.payInfo[this.cardIndex].info.customer_uid,this.payAmount,"앱주문").then((approval)=>{
                    ...
                    this.orderDetail+=" 승인번호:"+approval;
                    this.sms.send(this.storageProvider.phone, this.orderDetail).then((value)=>{

                    },err=>{
                        let alert = this.alertCtrl.create({
                            title: '문자전송에 실패했습니다. 상점에 연락바랍니다.',
                            buttons: ['OK']
                        });
                            alert.present();       
                    });

                    cordova.plugins.email.isAvailable((available)=>{
                        if(available) {
                            //Now we know we can send
                            cordova.plugins.email.open({
                                to:      this.storageProvider.email,
                                subject: '주문정보',
                                body:    this.orderDetail
                            });
                        }else{
                            let alert = this.alertCtrl.create({
                                title: '이메일 전송에 실패했습니다.',
                                buttons: ['OK']
                            });
                                alert.present();       
                            
                        }
                    });
                    resolve();
                })
            }else{
                        let alert = this.alertCtrl.create({
                            title: '결제비밀번호 오류입니다.',
                            buttons: ['OK']
                        });
                            alert.present();       
                    reject();
            }
