import { Component, OnInit } from '@angular/core';
import {HeaderOutputPropsService} from '../../../core/services/header-output-props.service';
import {YoutubeHTTPService} from '../../services/youtubeHTTP.service';
import {ISearchItem} from '../../models/search-item.model';
import {select, Store} from '@ngrx/store';
import {selectCustomCards, selectYoutubeCards} from '../../../redux/selectors/items.selectors';
import { IState } from '../../../redux/state.models';
import { ICustomCard } from '../../models/customCard.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './searchResultsPage.component.html',
  styleUrls: ['./searchResultsPage.component.scss']
})
export class SearchResultsPageComponent implements OnInit {
  private customCards: Array<ICustomCard>;
  private youtubeCards: ISearchItem[];
  public filterParams: {filterParam: string, increaseParam: boolean};

  constructor(private youtubeHttpService: YoutubeHTTPService,
              private headerService: HeaderOutputPropsService,
              private store: Store<IState>) { }

  public ngOnInit(): void {
   this.headerService.filterParams.subscribe(
     (params) => {
       this.filterParams = params;
     }
   );

   this.store.pipe(select(selectYoutubeCards))
     .subscribe(res => {
       this.youtubeCards = res.youtubeCards;
     });

   this.store.pipe(select(selectCustomCards))
      .subscribe(res => {
        console.log(res);
        this.customCards = res.customCards;
      });
  }

  get getYoutubeCards(): ISearchItem[] {
    return this.youtubeCards;
  }

  get getCustomCards(): Array<ICustomCard> {
    return this.customCards;
  }
}
