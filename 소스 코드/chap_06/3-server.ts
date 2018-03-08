
import {StorageProvider} from '../storage/storage';
...
@Injectable()
export class ServerProvider {
  serverAddr:string="http://192.168.x.xxx:8080";

  username:string;
  password:string;

  constructor(public http: HttpClient,private platform:Platform,
                private storageProvider:StorageProvider) {
  }

login(username, password){
    return new Promise((resolve,reject)=>{
        let body={username:username,password:password};

       let headers = new HttpHeaders({'Content-Type': 'application/json'});
       this.http.post(this.serverAddr+"/login",JSON.stringify(body),{headers:headers}).subscribe((res:any)=>{
                      console.log("res:"+JSON.stringify(res));
                      if(res.result=="success"){
                          // save id and password
                          this.storageProvider.saveLoginInfo(username,password);
                          this.username=username;
                          this.password=password;
                          resolve(res);
                      }else{
                          reject("invalid userInfo");
                      }  

        },(err)=>{
            reject("network/server err");
        });
        
    });
  }
  ...
}
