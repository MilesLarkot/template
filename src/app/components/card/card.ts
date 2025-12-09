import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../button/button';
import { CommonModule } from '@angular/common';
import { CurrentUserService } from '../../shared/services/current-user-service';
import { ProductServices } from '../../shared/services/product-services';
import { Product } from '../../models/product';

@Component({
  selector: 'doodle-card',
  imports: [Button, CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() product?: Product;

  @Input() primaryButton?: string;

  @Input() secondaryButton?: string;

  isLiked: boolean = false;
  isDisliked: boolean = false;

  constructor(
    private currentUserService: CurrentUserService,
    private productServices: ProductServices
  ) {}

  getTheme() {
    return this.currentUserService.currentUser?.theme;
  }

  like() {
    if (this.product && this.product.rating != null) {
      if (this.isDisliked) {
        this.product.rating += 2;
        this.isDisliked = false;
      } else if (this.isLiked) {
        this.product.rating -= 1;
        this.isLiked = false;
      } else {
        this.product.rating += 1;
        this.isLiked = true;
        this.isDisliked = false;
      }
      if (this.product.id) {
        this.productServices.updateProduct(this.product.id, this.product).subscribe();
      }
    }
  }
  dislike() {
    if (this.product && this.product.rating != null) {
      if (this.isLiked) {
        if (this.product.rating > 1) {
          this.product.rating -= 2;
          this.isLiked = false;
        } else {
          this.product.rating -= 1;
          this.isLiked = false;
        }
      } else if (this.isDisliked) {
        this.product.rating += 1;
        this.isDisliked = false;
      } else if (this.product.rating > 0) {
        this.product.rating -= 1;
        this.isDisliked = true;
        this.isLiked = false;
      }
      if (this.product.id) {
        this.productServices.updateProduct(this.product.id, this.product).subscribe();
      }
    }
  }
}
