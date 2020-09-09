import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ShortUrlInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    let fullRequest: string = 'https://www.googleapis.com/youtube/v3/' + request.url;
    const dupReq: HttpRequest<unknown> = request.clone({ url: fullRequest });
    return next.handle(dupReq).pipe(
      tap(() => {
          console.log('short Urls interceptor');
      }),
    );
  }
}
