   savePassowrd(password){
          var encrypted:string=this.encryptValue(password);
          this.nativeStorage.setItem('password',encodeURI(encrypted));
   }
   
    readPassword(){
        return new Promise((resolve,reject)=>{
            this.nativeStorage.getItem("password").then((value:string)=>{
                console.log("value:"+value);
                if(value==null){
                    reject();
                }else{    
                    resolve(this.decryptValue(value));
                }
            },(err)=>{
                    reject();
            });
        });
    }

