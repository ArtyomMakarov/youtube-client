import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('check Auth guard');
    if (localStorage.getItem('logInfo')) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
