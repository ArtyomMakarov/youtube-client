import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { HeaderOutputPropsService } from '../../services/header-output-props.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { LoginService } from '../../services/login.service';
import {YoutubeHTTPService } from '../../../youtube/services/youtubeHTTP.service';
import {fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') private searchInputRef: ElementRef;
  public settingsMode: number = 0;
  public increase: boolean = true;
  public showDateIcon: boolean = true;
  public showCountIcon: boolean = true;
  public userAuth: boolean;
  public userName: string;

  constructor( private headerService: HeaderOutputPropsService, private router: Router,
               private localService: LocalStorageService, private loginService: LoginService,
               private youtubeHttpService: YoutubeHTTPService) {
  }

  public ngOnInit(): void {
    this.loginService.isAuth.subscribe(authBoolean => {
      this.userAuth = authBoolean;
    });
    this.loginService.getLoginName.subscribe(login => {
      this.userName = login;
    });
  }

  public ngAfterViewInit(): void {
    fromEvent(this.searchInputRef.nativeElement, 'keyup')
      .pipe(debounceTime(1000))
      .subscribe(() => {
        const SEARCH_STRING: string = this.searchInputRef.nativeElement.value;
        if (SEARCH_STRING.length >= 3) {
          this.youtubeHttpService.loadFullResponse(SEARCH_STRING)
            .subscribe(res => this.headerService.setItemsArr(res.items));
        }
      });
  }

  public showFilterField(): void {
    this.settingsMode === 0 ? this.settingsMode = 1 : this.settingsMode = 0;
  }

  public filterItems(val: string): void {
    this.changeSortIcon(val);
    this.increase === true ? this.changeFilterIncrease(val, true) : this.changeFilterIncrease(val, false);
  }
  public changeFilterIncrease(val: string, increaseParam: boolean): void {
    if (increaseParam) {
      this.increase = false;
      this.headerService.setFilterParams({filterParam: val, increaseParam: true});
    } else {
      this.increase = true;
      this.headerService.setFilterParams({filterParam: val, increaseParam: false});
    }
  }
  public changeSortIcon(val: string): void {
    if (val === 'date') {
      this.showCountIcon = true;
      this.showDateIcon = false;
    }
    if (val === 'count of views') {
      this.showCountIcon = false;
      this.showDateIcon = true;
    }
  }
  public logOut(): void {
      this.localService.clear();
      this.loginService.isAuth.next(false);
      this.loginService.userLogOut('Your Name');
      this.router.navigate(['']);
  }
}
// concatMap((): Observable<ISearchResponse> => {
//   if (this.searchInputRef.nativeElement.value.length >= 3) {
//     console.log(this.searchInputRef.nativeElement.value);
//     return this.youtubeHttpService
//       .loadFullResponse(this.searchInputRef.nativeElement.value || '');
//   } else {
//     throwError('String less than 3');
//   }
// }),
//   tap((res) => this.headerService.setItemsArr(res.items)))
// .subscribe(res => this.headerService.setItemsArr(res.items),
//   err => console.log('handle error', err));
