import { Component, Input } from '@angular/core';
import {ISearchItem} from '../../models/search-item.model';
import { DetailedInfoService } from '../../services/detailed-info.service';
import { Router } from '@angular/router';
import { ICustomCard } from '../../models/customCard.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input () private items: Array<ISearchItem>;
  @Input () private customCards: Array<ICustomCard>;

  constructor(private detailedService: DetailedInfoService, private router: Router) { }

  public get getItems(): Array<ISearchItem> {
    return this.items;
  }

  public get getCustomCards(): Array<ICustomCard> {
    return this.customCards;
  }

  public goToDetailedInfo(item: ISearchItem): void {
    this.detailedService.set(item);
    this.router.navigate(['search', 'info', item.id]);
  }

  public goToCustomItemDetailedInfo(item: ICustomCard): void {
    this.detailedService.setCustomItem(item);
    this.router.navigate(['search', 'info', item.id]);
  }
}
