  order(){
      let orderDetail=" "+this.menu.menuName+" "+this.menu.count;
      if(this.options){
          this.options.forEach(option => {
              if(option.flag===true){
                  orderDetail+=" "+option.name;
                  if(option.default){
                        orderDetail+=option.default;
                  }
              }
          });
      }
    console.log("orderDetail:"+orderDetail);  
    this.navCtrl.push(PaymentPage,
                      {class:"PaymentPage",orderDetail:orderDetail,amount:this.amount,menu:this.menu,options:this.options});  
  }
