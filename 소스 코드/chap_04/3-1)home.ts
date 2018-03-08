export class HomePage {
  input;

  moveToNextPage(){
    console.log("number:"+this.input);
    this.navCtrl.push(NextPage,{number:this.input});  
  }
}
