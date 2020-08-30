import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginInput') private loginElemRef: ElementRef;
  @ViewChild('passwordInput') private passwordElemRef: ElementRef;
  public customerForm: FormGroup;

  constructor(private localService: LocalStorageService, private router: Router) { }

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
    this.localService.set('login', loginObj);
    this.router.navigate(['/search']);
  }
}
