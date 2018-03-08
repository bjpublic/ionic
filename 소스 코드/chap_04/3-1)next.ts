
export class NextPage {
  number:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.number=navParams.get('number');
      console.log("number:"+this.number);
  }
}
