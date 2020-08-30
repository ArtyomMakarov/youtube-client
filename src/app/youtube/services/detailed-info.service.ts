import { Injectable } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class DetailedInfoService {
  private item: ISearchItem;
  constructor() { }
  public get(): ISearchItem {
    return this.item;
  }
  public set(val: ISearchItem): void {
    this.item = val;
  }
}
