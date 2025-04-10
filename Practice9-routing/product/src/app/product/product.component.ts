import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone:true,
})

export class ProductComponent implements OnInit, OnDestroy {
  productId!: number;
  product: any;
  imageurl!: string;
  private paramMapSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  // ngOnInit(): void {
  //   console.log('Subscription active');
  //   this.paramMapSubscription = this.route.paramMap.subscribe((params) => {
  //     const id = params.get('id');
  //     if (id !== null) {
  //       this.productId = +id;
  //       this.product = this.productService.getProductById(this.productId);
  //     } else {
  //       console.error('Product ID is missing!');
  //     }
  //   });
  // }
  // ngOnDestroy(): void {
  //   if (this.paramMapSubscription) {
  //     this.paramMapSubscription.unsubscribe();
  //     console.log('Unsubscribed from paramMap');
  //   }
  // }

  // }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productId = +id;
      this.product = this.productService.getProductById(this.productId);
    } else {
      console.error('Product ID is missing!');
    }
    console.log('ProductComponent Initialized');
  }
  ngOnDestroy(): void {
    console.log('ProductComponent Destroyed');
  }
}
