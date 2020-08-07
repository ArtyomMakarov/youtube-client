import { Component, Input, OnChanges } from '@angular/core';
import {YoutubeClientService} from '../../services/youtube-client.service';
import {ISearchItem} from '../../models/search-item.model';
import {FilterByPipe} from '../../pipes/filter-by.pipe';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnChanges {
  @Input()
  public showMode: boolean;
  @Input()
  public filterParam: {param1: string, param2: boolean};
  protected itemsArr: Array<ISearchItem>;

  constructor(private datasource: YoutubeClientService, private filterPipe: FilterByPipe) {
    // datasource.getObservable().subscribe(items => {
    //   this.itemsArr = items;
    // });
    this.itemsArr = datasource.items;
  }

  get getItems(): Array<ISearchItem> {
    return this.itemsArr;
  }

  ngOnChanges(): void {
    if (this.filterParam) {
      const filterItems = this.filterPipe.transform(this.itemsArr, this.filterParam);
      this.itemsArr = filterItems;
    }
  }
}
