import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private key: string = 'AIzaSyCjSGG1xM4EFW7CidOElcR7Xm2Wred1scs';

  constructor() { }

  get getKey(): string {
    return this.key;
  }
}
