
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
    menu;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let menuString=this.navParams.get('menu');
    this.menu=JSON.parse(menuString);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  cancel(){
    this.navCtrl.pop();
  }
}
