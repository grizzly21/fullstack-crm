import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = localStorage.getItem('auth-token')?.toString() || '';
  private apiUrl: string = 'http://localhost:8080/'

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'register', user);
  }

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl + 'login', user).pipe(
      tap(({ token }) => {
        localStorage.setItem('auth-token', token);
        this.setToken(token);
      })
    );
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.token = '';
    localStorage.clear();
  }
}
