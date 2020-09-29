import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('loginInput') private loginElemRef: ElementRef;
  @ViewChild('passwordInput') private passwordElemRef: ElementRef;
  public customerForm: FormGroup;

  constructor(private localService: LocalStorageService, private router: Router,
              private loginService: LoginService) { }

  public ngOnInit(): void {
    this.customerForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.customerForm.controls[controlName].hasError(errorName);
  }

  public saveToLocalStorage(): void {
    const loginObj: {[key: string]: string} = {
      login: this.loginElemRef.nativeElement.value,
      password: this.passwordElemRef.nativeElement.value};
    this.loginService.userLogIn({userInfo: loginObj, auth: true});
    this.router.navigate(['/search']);
  }
}
