    if(this.platform.is("android")){ 
          androidPermissions.checkPermission(androidPermissions.PERMISSION.GET_ACCOUNTS).then((status)=> {
            if (status.hasPermission ) {
              console.log("Yes :D ");
              plugins.DeviceAccounts.getEmail((info)=>{
                this.ngZone.run(()=>{
                  this.email=info;
                });
              });
            }
            else {
              console.warn("No :( ");
              androidPermissions.requestPermission(androidPermissions.PERMISSION.GET_ACCOUNTS).then((status)=>{
                if( status.hasPermission ){
                    console.log("call DeviceAccounts");
                    plugins.DeviceAccounts.getEmail((info)=>{
                      this.ngZone.run(()=>{
                        this.email=info;
                      });
                    });
                }
              },(err)=>{

              });
            }
          },(err)=>{

          });
        ...
  }
