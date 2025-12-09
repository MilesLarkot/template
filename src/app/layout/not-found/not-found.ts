import { Component } from '@angular/core';
import { CurrentUserService } from '../../shared/services/current-user-service';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  constructor(private currentUserService: CurrentUserService) {}

  getTheme() {
    return this.currentUserService.currentUser?.theme;
  }
}
