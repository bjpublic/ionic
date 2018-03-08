
import { HomePage } from '../pages/home/home';
import { SettingPage } from '../pages/setting/setting';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  currentPage='HomePage';

  checkPageHidden(page){
    if(this.currentPage==page){
        return true;
    }
    return false;
  }

  openSettingPage(){
    console.log("openSettingPage");
    this.app.getRootNavs()[0].setRoot(SettingPage);
    setTimeout(() => {  // workaround 
      this.currentPage='SettingPage';   
    }, 500); //  0.5 seconds      
  }

  openHomePage(){
    console.log("openHomePage");
    this.currentPage='HomePage';
    this.app.getRootNavs()[0].setRoot(HomePage);
    setTimeout(() => {  // workaround 
      this.currentPage='HomePage';   
    }, 500); //  0.5 seconds         
  }

  exit(){
    console.log("exit");
    this.platform.exitApp();
  }

}

