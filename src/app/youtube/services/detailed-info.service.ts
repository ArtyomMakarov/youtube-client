import { Injectable } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';
import { ICustomCard } from '../models/customCard.model';

@Injectable({
  providedIn: 'root'
})
export class DetailedInfoService {
  private item: ISearchItem ;
  private customItem: ICustomCard;
  constructor() { }
  public get(): ISearchItem {
    return this.item;
  }
  public set(val: ISearchItem): void {
    this.item = val;
  }
  public setCustomItem(val: ICustomCard): void {
    this.customItem = val;
  }
  public get getCustomItem(): ICustomCard {
    return this.customItem;
  }
}
