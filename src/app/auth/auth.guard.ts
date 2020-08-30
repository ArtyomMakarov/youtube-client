import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('check Auth guard');
    if (localStorage.getItem('login')) {
      return true;
    } else {
      return false;
    }
  }
}
