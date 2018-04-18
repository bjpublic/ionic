# ionic
반갑다 Ionic

소스 코드에 대한 문의 사항 있으시면
저자께서 관리하는 https://github.com/raceyi/Ionic2Samples 에서 
참조 부탁드립니다.


## 수정 사항 1 ## 

반간다 Ionic 326 페이지에 짤린 코드가 있어 공지 드립니다.

          const options: PushOptions = {
            android: {
                senderID: 'XXXXXXXXX', //App's senderID. Please check your firebase configuration
                sound: 'true',
                clearBadge: true
            },
            ios: {
                fcmSandbox: 'true', // 'true': development, 'false':production
                alert: 'true',
                badge: 'true',
                sound: 'true',
                clearBadge: true
            }
          };

          this.pushObject = this.push.init(options);

          this.pushObject.on('notification').subscribe((notification: any) =>{
              console.log('Received a notification'+ JSON.stringify(notification));
          });

          this.pushObject.on('registration').subscribe((registration: any) =>{
              console.log('Device registered', JSON.stringify(registration));
              console.log("registrationId:"+registration.registrationId);
              this.ngZone.run(()=>{
                  this.registrationId=registration.registrationId;
              });
              this.clipboard.copy(this.registrationId);
          });

          this.pushObject.on('error').subscribe(error => {
              console.error('Error with Push plugin', JSON.stringify(error))}
          );

    });
  }

}
## 수정 사항 2 ## 
223, 233페이지 정정 요망
(책, github)

오류
if(res.result = 'success')
--------------------------------
정정
if(res.result === 'success')

alert 이후에 아래의 코드를 추가해야 메시지를 표시함.

alert.present();

## 수정 사항 3 ## 




