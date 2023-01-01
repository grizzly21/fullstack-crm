import { AuthService } from './../../auth/services/auth.service';
import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.isAuthenticated()){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`,
          "content-type": 'application/json; charset=utf-8'
        }
      })
    }

    return next.handle(req)
  }
}
