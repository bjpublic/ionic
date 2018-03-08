
  removeCard(i){
    let alert = this.alertCtrl.create({
        title: this.storageProvider.payInfo[i].info.name+"를 삭제하시겠습니까?",
              buttons: [
        {
          text: '네',
          handler: () => {
            console.log('Agree clicked');
            this.ngZone.run(()=>{
                this.cardProvider.removeCard(i);
                this.currentCardClassesArray.splice(i,1);
            });
          }
        },
        {
          text: '아니오',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    alert.present();
  }

  addCard(){
        this.cardProvider.addCard().then((res)=>{
            this.ngZone.run(()=>{
                this.currentCardClassesArray.push({
                    'card-card':true,
                    'scroll-col-latest':true,
                    'card-unselect-border':true,
                    'select-scroll-col-latest':false,
                    'card-select-border':false
                });
            });            
        },err=>{

        });
  }

