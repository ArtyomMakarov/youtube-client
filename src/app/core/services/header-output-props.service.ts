import { Injectable, EventEmitter } from '@angular/core';
import {IFilterParams} from '../models/filter-params.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderOutputPropsService {
  public showSearchResults: boolean;
  public filterParams: EventEmitter<IFilterParams> = new EventEmitter<IFilterParams>();
  constructor( ) { }
  public setShowSearchResults(val: boolean): void {
    this.showSearchResults = val;
  }
  public setFilterParams(params: {filterParam: string, increaseParam: boolean}): void {
    this.filterParams.emit(params);
  }
}
