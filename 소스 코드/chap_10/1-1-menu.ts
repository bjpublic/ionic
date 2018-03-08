
  constructor(public navCtrl: NavController,public navParams: NavParams) {    
     this.menu=this.navParams.get("menu");
     if(this.menu.hasOwnProperty("options"))
        this.options=JSON.parse(this.menu.options);
     this.amount=this.menu.price;
     this.menu.count = 1;
  }
