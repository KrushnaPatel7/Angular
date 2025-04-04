import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css'],
})
export class DirectivesExampleComponent {
  num: string = '';
  employee = [
    { name: 'Krushna', age: 23 },
    { name: 'Swati', age: 28 },
    { name: 'Diya', age: 45 },
    { name: 'Raj', age: 32 },
  ];
}
