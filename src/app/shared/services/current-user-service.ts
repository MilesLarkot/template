import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserServices } from './user-services';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(private userServices: UserServices) {}

  loadUser(userId: string) {
    this.userServices.getUserById(userId).subscribe({
      next: (u) => this.userSubject.next(u),
      error: (err) => console.error('Failed to load user:', err),
    });
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }
}
