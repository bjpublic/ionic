import { Component } from '@angular/core';
import { App, NavController ,Platform,IonicApp,MenuController,ViewController,AlertController} from 'ionic-angular';

import {NextPage} from '../next/next';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navController: NavController,
              private platform:Platform,
              private ionicApp: IonicApp,
              private menuCtrl: MenuController,
              public viewCtrl: ViewController,
              private alertController:AlertController,
              private app:App) {

  }

  nextPage(){
    console.log("move into next Page");
    this.navController.push(NextPage,{},{animate:true,animation: 'slide-up-down', direction: 'forward' });
  }

}
