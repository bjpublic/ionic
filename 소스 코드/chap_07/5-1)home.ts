...
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
      trigger('slide', [
      state('down', style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)' // x,y,z
      })),
      state('up', style({
        opacity: 1,
        transform: 'translate3d(0, -50vh, 0)'
      })),
      transition('down => up', animate('1000ms')),
      transition('up => down', animate('1000ms'))
    ]),
    trigger('fade', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0.1
      })),
      transition('visible <=> invisible', animate('1000ms linear'))
    ])
    ]  
})

...
export class HomePage {
  ...