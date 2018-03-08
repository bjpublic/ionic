
 myCallbackPasswordFunction = (_params) => {
      return new Promise((resolve, reject) => {
            let  views:ViewController[]; 
            views=this.navCtrl.getViews();            
            views.forEach(view=>{
                if(view.getNavParams().get("class")!=undefined){
                    console.log("class:"+view.getNavParams().get("class"));
                    if(view.getNavParams().get("class")=="MenuPage"||
                       view.getNavParams().get("class")=="PaymentPage")  {
                            console.log("remove "+view.getNavParams().get("class"));
                            this.navCtrl.removeView(view);
                      }             
                }
            })
            resolve();
      });
  }

 