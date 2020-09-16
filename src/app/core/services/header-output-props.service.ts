import { Injectable, EventEmitter } from '@angular/core';
import {IFilterParams} from '../models/filter-params.model';
import {ISearchItem} from '../../youtube/models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderOutputPropsService {
  public filterParams: EventEmitter<IFilterParams> = new EventEmitter<IFilterParams>();
  constructor( ) { }
  public setFilterParams(params: {filterParam: string, increaseParam: boolean}): void {
    this.filterParams.emit(params);
  }
}
