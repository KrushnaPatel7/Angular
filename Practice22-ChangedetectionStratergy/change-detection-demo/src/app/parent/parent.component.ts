import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  //changeDetection: ChangeDetectionStrategy.Default, // Using Default strategy here
})
export class ParentComponent {
  counter: number = 0;

  constructor() {
    // Simulate periodic change to the counter
    setInterval(() => {
      this.counter++;
      console.log('Parent counter updated:', this.counter);
    }, 1000);
  }
}
