import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products = [
    { id: 1, name: 'Laptops' },
    { id: 2, name: 'Headphones' },
    { id: 3, name: 'Televisions' },
  ];
  constructor(private router: Router) {}
  redirectTo(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
