  selectInStore(){
      this.inStoreColor="#6441a5";
      this.takeoutColor="#bdbdbd";
      this.deliveryColor="#bdbdbd";
      this.takeout=0; //takeout:1 , takeout:2(delivery)
      this.payAmount=this.totalAmount*0.97;  
      this.discount=this.totalAmount*0.03;          
  }

  selectTakeOut(){
      this.inStoreColor="#bdbdbd";
      this.takeoutColor="#6441a5";
      this.deliveryColor="#bdbdbd";
      this.takeout=1; //takeout:1 , takeout:2(delivery)
      this.payAmount=this.totalAmount*0.97;
      this.discount=this.totalAmount*0.03;      
  }

  selectDelivery(){
      this.inStoreColor="#bdbdbd";
      this.takeoutColor="#bdbdbd";
      this.deliveryColor="#6441a5";
      this.takeout=2; //takeout:1 , takeout:2(delivery)
      this.payAmount=this.totalAmount*0.97+this.storageProvider.deliveryFee;
      this.discount=this.totalAmount*0.03;
  }

