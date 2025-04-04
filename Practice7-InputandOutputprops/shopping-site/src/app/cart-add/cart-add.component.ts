import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-add',
  templateUrl: './cart-add.component.html',
  styleUrls: ['./cart-add.component.css'],
})
export class CartAddComponent {
  productName: string = '';
  quantity: number = 1;

  @Output() addProduct = new EventEmitter<{
    name: string;
    quantity: number;
    price: number;
  }>();

  products = [
    { name: 'Laptop', price: 60000 },
    { name: 'Phone', price: 50000 },
    { name: 'Headphones', price: 3000 },
    { name: 'Monitor', price: 30000 },
  ];

  addToCart() {
    if (this.productName && this.quantity > 0) {
      const selectedProduct = this.products.find(
        (p) => p.name === this.productName
      );
      if (selectedProduct) {
        this.addProduct.emit({
          name: selectedProduct.name,
          quantity: this.quantity,
          price: selectedProduct.price,
        });
      }
      this.productName = '';
      this.quantity = 1;
    }
  }
}
