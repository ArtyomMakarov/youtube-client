import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
    this.loginService.userLogIn('login', loginObj);
    this.loginService.isAuth.next(true);
    this.router.navigate(['/search']);
  }
}
