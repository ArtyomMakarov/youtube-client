import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginInfo$: BehaviorSubject<{ userInfo: { [key: string]: string }, auth: boolean }> =
    new BehaviorSubject({userInfo: {}, auth: false});

  constructor(private localStorageService: LocalStorageService) {
  }

  public userLogIn(logInfo: { userInfo: { [key: string]: string }, auth: boolean }): void {
    this.localStorageService.set('logInfo', logInfo);
    this.loginInfo$.next(logInfo);
  }

  public userLogOut(logInfo: { userInfo: {}, auth: boolean }): void {
    this.localStorageService.clear();
    this.loginInfo$.next(logInfo);
  }

  public get getLoginInfo(): BehaviorSubject<{ userInfo: { [key: string]: string }, auth: boolean }> {
    return this.loginInfo$;
  }

  public get getLocalStorageInfo(): { userInfo: { [key: string]: string }, auth: boolean } {
    return this.localStorageService.get('logInfo');
  }
}
