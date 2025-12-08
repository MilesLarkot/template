import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private urlBackend = 'http://localhost:3000/users';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.urlBackend}/${id}`);
  }
}
