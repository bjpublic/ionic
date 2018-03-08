          this.pushObject.on('notification').subscribe((notification: any) =>{
              console.log('Received a notification', JSON.stringify(notification))
              this.pushObject.getApplicationIconBadgeNumber().then(number=>{
                console.log("badge count:"+number);
              });
              this.pushObject.setApplicationIconBadgeNumber(0).then(()=>{

              },err=>{

              });

          });

