import { Component, ViewChild, ElementRef } from '@angular/core';
import { HeaderOutputPropsService } from '../../services/header-output-props.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @ViewChild('searchInput') private searchInputRef: ElementRef;
  public settingsMode: number = 0;
  public increase: boolean = true;
  public showDateIcon: boolean = true;
  public showCountIcon: boolean = true;

  constructor( private headerService: HeaderOutputPropsService, private router: Router,
               private localService: LocalStorageService) {
  }

  public showFilterField(): void {
    this.settingsMode === 0 ? this.settingsMode = 1 : this.settingsMode = 0;
  }

  public searchSubmit(): void {
    if (this.searchInputRef.nativeElement.value) {
      this.headerService.setShowSearchResults(true);
    } else {
      this.headerService.setShowSearchResults(false);
    }
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
      this.router.navigate(['']);
  }
}
