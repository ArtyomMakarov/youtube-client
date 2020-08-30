import { Component } from '@angular/core';
import { DetailedInfoService } from '../../services/detailed-info.service';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent {
  public item: ISearchItem;
  constructor(private detailedService: DetailedInfoService) {
    this.item = this.detailedService.get();
  }
}
