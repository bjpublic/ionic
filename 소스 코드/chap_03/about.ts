
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  months=[];

  constructor(public navCtrl: NavController) {
    this.months=["Jan","Feb","Mar","April","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  }

}
