import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../../../../../Документи — MacBook Pro - Andrew/GitHub/crm/src/app/auth/common/interfaces";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = localStorage.getItem('auth-token')?.toString() || ''

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/register', user)
  }

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('http://localhost:4999/api/auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token);
            this.setToken(token)
          }
        )
      )
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    return this.token
  }

  isAuthenticated(): boolean{
    console.log('is auth')
    return !!this.token
  }

  logout(){
    this.token = ''
    localStorage.clear()
  }
}
