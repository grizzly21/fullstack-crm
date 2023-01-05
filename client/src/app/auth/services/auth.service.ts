import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:8080/'

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'register', user);
  }

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl + 'login', user).pipe(
      tap(({ token }) => {
        this.setToken(token);
      })
    );
  }

  setToken(token: string) {
    localStorage.setItem('auth-token', token);
  }

  getToken(): string | undefined {
    let token = localStorage.getItem('auth-token');
    if(token !== undefined){
      return token?.toString()
    }
    return undefined
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth-token');
  }

  logout() {
    localStorage.clear();
  }
}
