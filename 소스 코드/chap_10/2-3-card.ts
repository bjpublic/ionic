
  cancelPayment(imp_uid){
    return new Promise((resolve,reject)=>{             
    this.getAccessToken().then((accessToken:string)=>{
        let headers= new HttpHeaders({'Authorization':accessToken});
        let path="https://api.iamport.kr/payments/cancel";
        this.httpClient.post(path,{imp_uid:imp_uid}, {headers: headers}).subscribe((res:any)=>{  
            console.log("cancelPayment:"+JSON.stringify(res));
            if(res.code==0)            
                resolve();
            else
                reject();
        },err=>{
            reject();
        });
    },err=>{
        reject();
    });
    });
  }

