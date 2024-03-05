import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}
  token = `${localStorage.getItem('token')}`;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let updatedRequest = request.clone({
      headers: request.headers.set('token', this.token)
    })
    return next.handle(updatedRequest);
  }
}
