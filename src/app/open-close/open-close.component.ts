import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
    ]),
    state('closed', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    })),

    transition('open => closed', [
      animate('1s')
    ]), transition('close => open', [
      animate('0.5s')
    ])

  ]
})
export class OpenCloseComponent {
  isOpen = true
  onClick() {
    this.isOpen = !this.isOpen
  }
}


