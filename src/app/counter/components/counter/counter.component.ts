import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter +=  value;
  }

  reset(): void {
    this.counter = 10;
  }
}
