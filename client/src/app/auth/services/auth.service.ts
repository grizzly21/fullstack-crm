import { apiURL } from '../../config/urls';
import { IUser } from '../../interfaces/user.interface';
import { IUserInfo } from '../../interfaces/user-info.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: IUserInfo): Observable<IUserInfo> {
    return this.http.post<IUserInfo>(`${apiURL}register`, user);
  }

  login(user: IUser): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${apiURL}login`, user).pipe(
      tap(({ token }) => {
        this.setToken(token);
      })
    );
  }

  setToken(token: string) {
    localStorage.setItem('auth-token', token);
  }

  getToken(): string | undefined {
    const token = localStorage.getItem('auth-token');
    if(token !== undefined){
      return token?.toString()
    }
    return undefined
  }

  isAuthenticated(): boolean {
    return Boolean(localStorage.getItem('auth-token'));
  }

  logout() {
    localStorage.clear();
  }
}
