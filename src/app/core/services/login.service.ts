import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginName$: BehaviorSubject<string> = new BehaviorSubject('Your Name');
  private authSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private localStorageService: LocalStorageService) { }
  public get isAuth(): BehaviorSubject<boolean> {
    let userInfo: {[key: string]: string} = this.localStorageService.get('login');
    if (userInfo) {
      this.authSubject$.next(true);
    }
    return this.authSubject$;
  }
  public userLogIn(key: string, data: { [key: string]: string }): void {
    this.localStorageService.set(key, data);
    this.loginName$.next(data.login);
  }
  public userLogOut(str: string): void {
    this.loginName$.next(str);
  }
  public get getLoginName(): BehaviorSubject<string> {
    let userInfo: {[key: string]: string} = this.localStorageService.get('login');
    if (userInfo) {
      this.loginName$.next(userInfo.login);
    }
    return this.loginName$;
  }
}
