import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { ProductServices } from '../../../../shared/services/product-services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit, OnDestroy {
  products: Product[] = [];
  private productsSubscription!: Subscription;

  constructor(private productServices: ProductServices) {}

  ngOnInit(): void {
    this.productsSubscription = this.productServices.getAllProducts().subscribe({
      next: (p) => {
        this.products = p;
      },
      error: (err) => {
        console.error('Failed to get products', err);
        this.products = [];
      },
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
