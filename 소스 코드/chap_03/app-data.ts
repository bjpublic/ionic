import { Injectable } from '@angular/core';

@Injectable()
export class AppDataProvider {
  
  appName:string="Ionic2+앱";

  constructor() {
    console.log('Hello AppDataProvider Provider');
  }

    getAppName(){
    return this.appName;
  }

}
