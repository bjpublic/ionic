
  fileUpload(imageURI){
    return new Promise((resolve,reject)=>{
      if(imageURI !== undefined){
         let options :FileUploadOptions = {
                    fileKey: 'file',
                    fileName: 'name.jpg', 
                    mimeType: 'image/jpeg',
                    params: { //extra fields which are delivered with file
                        description: 'file upload test' 
                    }
                }; 
                this.fileTransfer.onProgress(this.onProgress);
                console.log("call fileTransfer.upload "+imageURI);

                this.fileTransfer.upload(imageURI, this.serverURI, options, false)
                .then((response: any) => {
                    console.log("upload:"+JSON.stringify(response));
                    let result=JSON.parse(response.response);
                    console.log("result.result:"+result.result);
                    this.ngZone.run(()=>{
                      //console.log("progress 100%");
                      //this.workoutProgress='100%';
                    })
                    resolve();
                },(err)=>{
                    reject(err);
                });
        }
    });
  }
  
  onProgress(progressEvent: ProgressEvent){
    console.log("page.serverURI:"+page.serverURI);
    page.ngZone.run(()=>{
      let progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        page.workoutProgress = Math.min( (progress), 100) + '%';
        console.log("workoutProgress:"+page.workoutProgress);
    });
  }


