import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  userData = {
    name: 'Krushna Patel',
    age: 23,
    bio: 'Staying in Pune, Maharashtra.',
  };

  changeUserData() {
    this.userData = {
      name: 'Swati Shinde',
      age: 65,
      bio: 'Lives in Mumbai',
    };
  }
}
