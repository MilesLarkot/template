import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CurrentUserService } from '../../shared/services/current-user-service';

@Component({
  selector: 'doodle-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() variant: string = 'primary';
  @Input() text: string = 'Click Me!';

  constructor(private currentUserService: CurrentUserService) {}

  getTheme() {
    if (this.variant == 'primary') {
      return this.currentUserService.currentUser?.theme;
    }
    return 'white';
  }
}
