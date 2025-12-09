import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from '../../../../shared/services/product-services';
import { Product } from '../../../../models/product';
import { CurrentUserService } from '../../../../shared/services/current-user-service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product!: Product;

  constructor(
    private currentUserService: CurrentUserService,
    private productServices: ProductServices,
    private route: ActivatedRoute
  ) {}

  getTheme() {
    return this.currentUserService.currentUser?.theme;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.productServices.getProductById(id).subscribe((p) => {
      this.product = p;
    });
  }
}
