import { Component, OnInit } from '@angular/core';
import {HeaderOutputPropsService} from '../../../core/services/header-output-props.service';
import {YoutubeHTTPService} from '../../services/youtubeHTTP.service';
import {ISearchItem} from '../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  protected itemsArr: Array<ISearchItem>;
  public filterParams: {filterParam: string, increaseParam: boolean};

  constructor(private youtubeHttpService: YoutubeHTTPService,
              private headerService: HeaderOutputPropsService) { }

  public ngOnInit(): void {
   this.headerService.filterParams.subscribe(
     (params) => {
       this.filterParams = params;
     }
   );
   this.headerService.itemsArr.subscribe(items => this.itemsArr = items);
  }
  get getItems(): Array<ISearchItem> {
    return this.itemsArr;
  }
}
