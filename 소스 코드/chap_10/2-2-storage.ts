    savePayInfo(){
          var encrypted:string=this.encryptValue(JSON.stringify(this.payInfo));
          this.nativeStorage.setItem('payInfo',encodeURI(encrypted));
    }

    readPayInfo(){
        return new Promise((resolve,reject)=>{
            this.nativeStorage.getItem("payInfo").then((value:string)=>{
                console.log("value:"+value);
                if(value==null){
                    reject();
                }else{    
                    console.log(this.decryptValue(value));
                    this.payInfo=JSON.parse(this.decryptValue(value));
                    resolve();
                }
            },(err)=>{
                    reject();
            });
        });
    }
