import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchInput') searchInputRef: ElementRef;
  @Output()
  private showResult: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  public filter: EventEmitter<{param1: string, param2: boolean}> = new EventEmitter<{param1: string, param2: boolean}>();
  public settingsMode = 0;
  public increase = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  showFilterField(): void {
    this.settingsMode === 0 ? this.settingsMode = 1 : this.settingsMode = 0;
  }

  searchSubmit(): void {
    if (this.searchInputRef.nativeElement.value) {
      this.showResult.emit(true);
    } else {
      this.showResult.emit(false);
    }
  }
  filterItems(val: string): void {
    this.increase === true ? this.changeFilterIncrease(val, true) : this.changeFilterIncrease(val, false);
  }
  changeFilterIncrease(val: string, increaseParam: boolean): void {
    if (increaseParam) {
      this.increase = false;
      this.filter.emit({param1: val, param2: true});
    } else {
      this.increase = true;
      this.filter.emit({param1: val, param2: false});
    }
  }
}

