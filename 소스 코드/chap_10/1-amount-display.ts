
@Component({
  selector: 'amount-display',
  templateUrl: 'amount-display.html'
})
export class AmountDisplayComponent {
  @Input('amount') amount;

  constructor() {
    console.log('Hello AmountDisplayComponent Component '+this.amount);    
  }
}
