import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    PaymentPage
  ],
  imports: [
    IonicPageModule.forChild(PaymentPage),
    ComponentsModule,
  ],
})
export class PaymentPageModule {}
