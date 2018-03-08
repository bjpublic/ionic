    this.browserRef.on("loadstart").subscribe(function (e) {
        if (e.url.startsWith(redirectUrl)) {
            if(gCardProvider.browserRef!=undefined){
                gCardProvider.browserRef.close(); 
            }else
                console.log("this.browserRef is undefined");
            gCardProvider.done=true;
            if(e.url.includes("imp_success=true")){
                console.log("cert success");
                let strs=e.url.split("imp_uid=");
                let strs1=strs[1].split("&");
                gCardProvider.getAccessToken().then((accessToken)=>{
                    // call get function to get card info
                    gCardProvider.getCardInfo(customer_uid,accessToken).then((res)=>{
                        if(!res.hasOwnProperty("card_name"))
                            resolve({customer_uid:customer_uid,card_name:res.card_name});
                        else    
                            resolve({customer_uid:customer_uid,card_name:res.card_name,mask_no:res.mask_no});
                    },err=>{

                    });
                });
                // cancel card payment, 10 won
                gCardProvider.cancelPayment(strs1[0]); //imp_uid
            }else{
                console.log("cert failure");            
                reject('카드 등록에 실패하였습니다.');
            }
        }
    });