var gCardProvider;

/*
  Generated class for the CardProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardProvider {
  done:boolean=false;
  browserRef;

  constructor(...
              private iab: InAppBrowser) {
    console.log('Hello CardProvider Provider');
    gCardProvider=this;    
  }

///////////////////////////////////////////////////////////
   registerCard(){
   ...
    this.browserRef=this.iab.create(localfile,"_blank");
    this.browserRef.on("loadstart").subscribe(function (e) {
        if (e.url.startsWith(redirectUrl)) {
            if(gCardProvider.browserRef!=undefined){
                gCardProvider.browserRef.close(); 
            }else
                console.log("gCardProvider.browserRef is undefined");
            gCardProvider.done=true;
            console.log("result:"+e.url);
  ...