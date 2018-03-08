...
import {SlideUpDownTransition} from '../classes/slide-up-down-transition';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  constructor(public config: Config,
          platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   
   this.config.setTransition('slide-up-down', SlideUpDownTransition);

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

