    saveId(type,id,email){
          let string=JSON.stringify({type:type,id:id,email:email});
          console.log("saveId:"+string);
          var encrypted:string=this.encryptValue(string);
          this.nativeStorage.setItem('id',encodeURI(encrypted));
          this.type=type;
          this.id=id;
          this.email=email;
    }

    readId(){
        return new Promise((resolve,reject)=>{
            console.log("readId getItem");
            this.nativeStorage.getItem("id").then((value:string)=>{
                console.log("...value:"+value);
                if(value==null){
                    reject();
                }else{    
                    console.log("...id:"+this.decryptValue(value));
                    let obj=JSON.parse(this.decryptValue(value));
                    this.email=obj.email;
                    this.type=obj.type;
                    this.id=obj.id;
                    resolve(JSON.parse(this.decryptValue(value)));
                }
            },(err)=>{
                    reject();
            });
        });
    }

