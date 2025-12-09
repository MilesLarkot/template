import { Component, Input } from '@angular/core';
import { Button } from '../button/button';
import { CommonModule } from '@angular/common';
import { CurrentUserService } from '../../shared/services/current-user-service';

@Component({
  selector: 'doodle-card',
  imports: [Button, CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title?: string;
  @Input() description?: string;
  @Input() primaryButton?: string;
  @Input() secondaryButton?: string;
  @Input() stock?: number;
  @Input() rating?: number;
  @Input() isLiked?: boolean;
  @Input() isDisliked?: boolean;

  constructor(private currentUserService: CurrentUserService) {}

  getTheme() {
    return this.currentUserService.currentUser?.theme;
  }

  like() {
    if (this.rating != null) {
      if (this.isDisliked) {
        this.rating += 2;
        this.isDisliked = false;
      } else if (this.isLiked) {
        this.rating -= 1;
        this.isLiked = false;
      } else {
        this.rating += 1;
        this.isLiked = true;
        this.isDisliked = false;
      }
    }
  }
  dislike() {
    if (this.rating != null) {
      if (this.isLiked) {
        if (this.rating > 1) {
          this.rating -= 2;
          this.isLiked = false;
        } else {
          this.rating -= 1;
          this.isLiked = false;
        }
      } else if (this.isDisliked) {
        this.rating += 1;
        this.isDisliked = false;
      } else if (this.rating > 0) {
        this.rating -= 1;
        this.isDisliked = true;
        this.isLiked = false;
      }
    }
  }
}
