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
  constructor(private currentUserService: CurrentUserService) {}

  getTheme() {
    return this.currentUserService.currentUser?.theme;
  }
}
