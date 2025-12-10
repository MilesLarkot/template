import { Component } from '@angular/core';
import { ProductServices } from '../../../../shared/services/product-services';
import { Router } from '@angular/router';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  product!: Product;

  constructor(private productServices: ProductServices, private router: Router) {}

  save() {}
}
