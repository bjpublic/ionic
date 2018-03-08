...
cardColorlist=[
              {name:"bc",color:"#ec4855"},
              {name:"shinhan",color:"#134596"},
              {name:"samsung",color:"#0d62a8"},
              {name:"kb",color:"#756d62"},
              {name:"hyundai",color:"#000000"},
              {name:"woori",color:"#1a9fda"},
              {name:"lotte",color:"#e02431"},
              {name:"hana",color:"#108375"},
              {name:"kakao", color:"#EBE315"},
              {name:"master", color:"#fc601f"},
              ...];

defaultCardColor ="#33B9C6";            

  constructor() {
    console.log('Hello StorageProvider Provider');
    this.determinCardColor(); 
  }

    determinCardColor(){
        console.log("determinCardColor");
        this.payInfo.forEach((payment:any)=>{
            payment.background=this.defaultCardColor;
            for(var i=0;i<this.cardColorlist.length;i++){
                let name:string=payment.info.name;
                if(name.toLocaleLowerCase().startsWith(this.cardColorlist[i].name)){
                        payment.background=this.cardColorlist[i].color;
                }
            }
        })
        console.log("payments:"+JSON.stringify(this.payInfo));
    }

}
