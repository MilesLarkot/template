import { Component } from '@angular/core';
import { CurrentUserService } from '../../shared/services/current-user-service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  constructor(private currentUserService: CurrentUserService) {}

  getTheme() {
    return this.currentUserService.currentUser?.theme;
  }
}
