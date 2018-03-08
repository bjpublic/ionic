doInfinite(infiniteScroll){
      console.log("doInfinite");
      if(this.wholeTransactions.length-this.transactions.length<5){
            this.updateTransactions(this.wholeTransactions.length-this.transactions.length);
            infiniteScroll.enable(false);
        }else{
            this.updateTransactions(5);
            infiniteScroll.complete();
        }
  }
  
  updateTransactions(num){
      for(var i=0;i<num;i++){
        let tr=this.wholeTransactions[this.count+i];
        this.addStyle(tr);
        this.transactions.push(tr);
      }
      this.count=this.count+num;  
  }
  