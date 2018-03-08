
  order(){
    this.navCtrl.push(PaymentPage,
                      {class:"PaymentPage",amount:this.amount,menu:this.menu,options:this.options});  
  }

