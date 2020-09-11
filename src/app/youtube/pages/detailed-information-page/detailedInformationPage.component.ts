import { Component } from '@angular/core';
import { DetailedInfoService } from '../../services/detailed-info.service';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailedInformationPage.component.html',
  styleUrls: ['./detailedInformationPage.component.scss']
})
export class DetailedInformationPageComponent {
  public item: ISearchItem;
  constructor(private detailedService: DetailedInfoService) {
    this.item = this.detailedService.get();
  }
}
