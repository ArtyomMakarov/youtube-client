import { Component, Input } from '@angular/core';
import {YoutubeClientService} from '../../services/youtube-client.service';
import {ISearchItem} from '../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent  {
  @Input() public showMode: boolean;
  @Input() public filterParams: {filterParam: string, increaseParam: boolean};

  protected itemsArr: Array<ISearchItem>;

  constructor(private datasource: YoutubeClientService) {
    this.itemsArr = datasource.items;
  }

  public get getItems(): Array<ISearchItem> {
    return this.itemsArr;
  }
}
