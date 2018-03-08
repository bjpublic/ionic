...
  takePicture(){
    ...

    this.camera.getPicture(cameraOptions).then((imageURI) => {
        console.log("imageURI:"+imageURI);
        this.imageURI=imageURI;
        if(imageURI !== undefined){
            this.fileUpload(imageURI).then(()=>{

            },(err)=>{

            });
        }
    }, (err) => {
    // Handle error
        console.log("err:"+JSON.stringify(err)); 
    });
  }

  pickPicture(){
    ...
    this.camera.getPicture(options).then((imageURI) => {
        console.log("imageURI:"+JSON.stringify(imageURI));
        this.imageURI=imageURI;
        this.fileUpload(imageURI).then(()=>{

        },(err)=>{

        });
       }, (err) => {
           console.log("err:"+JSON.stringify(err)); 
       });        
  }
