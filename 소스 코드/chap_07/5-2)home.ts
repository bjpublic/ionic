
export class HomePage {
  slideState:string="down"; 
  fadeState:string="visible";

  constructor(public navCtrl: NavController) {

  }

  hide(){
    console.log("hide");
    this.slideState='up';
    this.fadeState='invisible';
  }

  show(){
    console.log("show");
    this.slideState='down';  
    this.fadeState="visible";  
  }

}
