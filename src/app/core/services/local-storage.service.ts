import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  public set(key: string, data: {userInfo: {[key: string]: string }, auth: boolean}): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  public get(str: string): {userInfo: {[key: string]: string }, auth: boolean} {
    return JSON.parse(localStorage.getItem(str));
  }
  public clear(): void {
    localStorage.clear();
  }
}
