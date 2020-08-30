import { Component, OnInit } from '@angular/core';
import {HeaderOutputPropsService} from '../../../core/services/header-output-props.service';
import {YoutubeClientService} from '../../services/youtube-client.service';
import {ISearchItem} from '../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  protected itemsArr: Array<ISearchItem>;
  public filterParams: {filterParam: string, increaseParam: boolean};
  constructor(private datasource: YoutubeClientService, private headerService: HeaderOutputPropsService) {
    this.itemsArr = datasource.items;
  }
  public ngOnInit(): void {
   this.headerService.filterParams.subscribe(
     (params) => {
       this.filterParams = params;
     }
   );
  }
  get getItems(): Array<ISearchItem> {
    return this.itemsArr;
  }
  get showSearchResults(): boolean {
    return this.headerService.showSearchResults;
  }
}
