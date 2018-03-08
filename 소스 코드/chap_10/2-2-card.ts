  getAccessToken(){
    return new Promise((resolve,reject)=>{ 
      let body={imp_key:"xxxxxx", imp_secret:"xxxxxxxxxxxxxxxxxx"};
      this.httpClient.post("https://api.iamport.kr/users/getToken",body).subscribe((res:any)=>{              
          console.log("res:"+JSON.stringify(res));
          resolve(res.response.access_token);
      },(err)=>{
          console.log("err:"+JSON.stringify(err));
      });
    });
  }

  getCardInfo(customer_uid,accessToken){
    return new Promise((resolve,reject)=>{       
      let path= 'https://api.iamport.kr/subscribe/customers/'+customer_uid+'?_token='+accessToken;
      this.httpClient.get(path).subscribe((res:any)=>{
            console.log("res:"+JSON.stringify(res));
            resolve({card_name:res.response.card_name,mask_no:res.response.card_number});
      },err=>{
            reject();
      });
    });
  }
