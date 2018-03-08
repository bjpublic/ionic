export class LoginPage {

  username:string;
  password:string;

  ...
  
  login(){
    console.log("username:"+this.username);
    console.log("password:"+this.password); 
  } 
}