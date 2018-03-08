
export class ContactPage {

  bold:boolean=false;
  italic:boolean=false;
  large:boolean=false;

  currentStyles = {
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size':  '12px'
  };

  constructor(public navCtrl: NavController) {

  }

  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.italic ? 'italic' : 'normal',
      'font-weight': this.bold ? 'bold'   : 'normal',
      'font-size':   this.large ? '24px'   : '12px'
    };
    console.log(JSON.stringify(this.currentStyles));
  }
}
