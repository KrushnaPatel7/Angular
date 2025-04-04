import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  cartItems: { name: string; quantity: number; price: number }[] = [];

  ngOnInit() {
    this.loadCartData();
  }
  onAddProduct(product: { name: string; quantity: number; price: number }) {
    const existingProduct = this.cartItems.find(
      (item) => item.name === product.name
    );
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cartItems.push(product);
    }
    this.saveCartData();
  }

  saveCartData() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
  loadCartData() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }
  getTotalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
  clearCart() {
    this.cartItems = [];
    localStorage.removeItem('cart');
  }
}
