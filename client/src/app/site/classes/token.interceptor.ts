import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { Observable, of, tap, catchError } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`,
        },
      });
    }

    return next.handle(req).pipe(
      tap(
        (evt) => {},
        (err: any) => {
          if (err.status === 0){
            this.router.navigate(['/login'])
          }
          return of(err)
        }
      )
    );
  }
}
