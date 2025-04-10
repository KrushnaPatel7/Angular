import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  products: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';
  private subscription!: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.subscription = this.productService.fetchProducts().subscribe({
      next: (response: any) => {
        this.products = response.products;
        this.loading = false;
        this.errorMessage = '';
      },
      error: (error: any) => {
        console.error('Error fetching products:', error);
        this.loading = false;
        this.errorMessage =
          'There was an error fetching the products. Please try again later.';
      },
      complete: () => {},
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('destroyed');
    }
  }

  closeError(): void {
    this.errorMessage = '';
  }
}
