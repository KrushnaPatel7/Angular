import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  //changeDetection: ChangeDetectionStrategy.Default, // Using Default strategy here
})
export class ChildComponent {
  @Input() counter: number = 0;
}
