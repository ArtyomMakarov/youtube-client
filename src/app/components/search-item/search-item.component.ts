import { Component, Input } from '@angular/core';
import {ISearchItem} from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input () private items: Array<ISearchItem>;

  constructor() { }

  public get getItems(): Array<ISearchItem> {
    return this.items;
  }

}
