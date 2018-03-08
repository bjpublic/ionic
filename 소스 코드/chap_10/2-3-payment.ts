
 myCallbackPasswordFunction = (_params) => {
      return new Promise((resolve, reject) => {
          this.storageProvider.readPassword().then((password)=>{
            if( password==_params){
                this.cardProvider.payCard(this.storageProvider.payInfo[this.cardIndex].info.customer_uid,this.payAmount,"앱주문").then((approval)=>{
                    this.orderDetail+=" 승인번호:"+approval;
...