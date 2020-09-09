import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShortUrlInterceptor } from './shortUrl.interceptor';
import { AuthTokenInterceptor } from './AuthToken';

export const httpInterceptorsProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ShortUrlInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true,
  }
];
