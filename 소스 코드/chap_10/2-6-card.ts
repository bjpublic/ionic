    payCard(customer_uid,amount,name){   
    return new Promise((resolve,reject)=>{             
        this.getAccessToken().then((accessToken:string)=>{
            let headers= new HttpHeaders({'Authorization':accessToken});
            let path="https://api.iamport.kr/subscribe/payments/again";
            let merchant_uid=customer_uid+'_'+new Date().getTime();
            let body={customer_uid:customer_uid, 
                    merchant_uid:merchant_uid, 
                    amount:amount,
                    name:name
                }
            this.httpClient.post(path,body, {headers: headers}).subscribe((res:any)=>{  
                console.log("payCard:"+JSON.stringify(res));
                if(res.code==0)            
                    resolve(res.response.apply_num);
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
