import { Component, Input } from '@angular/core';
interface City {
  name: string;
  description: string;
  image: string;
}
@Component({
  selector: 'app-cities-child',
  templateUrl: './cities-child.component.html',
  styleUrls: ['./cities-child.component.css'],
})
export class CitiesChildComponent {
  @Input() cities: City[] = [];
}
