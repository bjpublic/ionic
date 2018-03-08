import {OrderPageModule} from '../pages/order/order.module';
...
@NgModule({
  ...
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{mode:'ios'}),
    OrderPageModule
  ]
  ...
export class AppModule {}
