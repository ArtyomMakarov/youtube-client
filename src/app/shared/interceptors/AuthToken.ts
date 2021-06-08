import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../services/config.service';

import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor (private configService: ConfigService) {}
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    console.log('AuthToken interceptor');
    request = request.clone({
      setParams: {key: this.configService.getKey}
    });
    return next.handle(request);
  }
}
