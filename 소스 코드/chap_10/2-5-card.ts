
  addCard(){
     return new Promise((resolve,reject)=>{            
      this.registerCard().then((param:any)=>{
            this.storageProvider.payInfo.push({info:{name:param.card_name ,mask_no:param.card_number,customer_uid: param.customer_uid}});        
            this.storageProvider.determinCardColor();        
            this.storageProvider.savePayInfo();
            resolve({info:{name:param.card_name ,mask_no:param.card_number,customer_uid: param.customer_uid}});
        },(err)=>{
                    let alert = this.alertController.create({
                        title: JSON.stringify(err),
                        buttons: ['OK']
                    });
                    alert.present();
                    reject();
        });
     });
  }
  
  removeCard(i){
    this.storageProvider.payInfo.splice(i,1);
    this.storageProvider.savePayInfo();
  }

