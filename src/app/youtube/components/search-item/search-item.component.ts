import { Component, Input } from '@angular/core';
import {ISearchItem} from '../../models/search-item.model';
import { DetailedInfoService } from '../../services/detailed-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input () private items: Array<ISearchItem>;

  constructor(private detailedService: DetailedInfoService, private router: Router) { }
  public get getItems(): Array<ISearchItem> {
    return this.items;
  }
  public goToDetailedInfo(item: ISearchItem): void {
    this.detailedService.set(item);
    this.router.navigate(['search', 'info', item.id]);
  }

}
