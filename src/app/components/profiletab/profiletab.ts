import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';
import { CurrentUserService } from '../../shared/services/current-user-service';
@Component({
  selector: 'profiletab',
  imports: [],
  templateUrl: './profiletab.html',
  styleUrl: './profiletab.css',
})
export class Profiletab implements OnInit, OnDestroy {
  user!: User | null;
  currentUserId: string = 'one';
  users = ['one', 'two', 'three', 'four'];
  private subscription!: Subscription;

  constructor(private currentUserService: CurrentUserService) {}

  ngOnInit() {
    this.currentUserService.loadUser(this.currentUserId);
    this.subscription = this.currentUserService.user$.subscribe((u) => (this.user = u));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  pickRandomUser() {
    const others = this.users.filter((id) => id !== this.currentUserId);
    this.currentUserId = others[Math.floor(Math.random() * others.length)];
    this.currentUserService.loadUser(this.currentUserId);
    console.log(this.currentUserId);
  }
}
