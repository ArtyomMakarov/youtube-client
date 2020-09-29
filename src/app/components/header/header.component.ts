import { Component, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('searchInput') searchInputRef: ElementRef;

  @Output() private showResult: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public filter: EventEmitter<{filterParam: string, increaseParam: boolean}> = new EventEmitter<{filterParam: string,
    increaseParam: boolean}>();

  public settingsMode = 0;
  public increase = true;
  public showDateIcon = true;
  public showCountIcon = true;

  constructor() {}

  public showFilterField(): void {
    this.settingsMode === 0 ? this.settingsMode = 1 : this.settingsMode = 0;
  }

  public searchSubmit(): void {
    if (this.searchInputRef.nativeElement.value) {
      this.showResult.emit(true);
    } else {
      this.showResult.emit(false);
    }
  }
  public filterItems(val: string): void {
    this.changeSortIcon(val);
    this.increase === true ? this.changeFilterIncrease(val, true) : this.changeFilterIncrease(val, false);
  }
  public changeFilterIncrease(val: string, increaseParam: boolean): void {
    if (increaseParam) {
      this.increase = false;
      this.filter.emit({filterParam: val, increaseParam: true});
    } else {
      this.increase = true;
      this.filter.emit({filterParam: val, increaseParam: false});
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
}

