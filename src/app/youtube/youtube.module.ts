import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { YoutubeHTTPService } from './services/youtubeHTTP.service';
import { FilterItemsByParamsPipe } from './pipes/filterItemsByParams.pipe';
import { ItemCardBorderColorDirective } from './directives/item-card-border-color.directive';
import { YoutubeClientComponent } from './components/youtube-client/youtube-client.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DetailedInformationComponent } from './components/detailed-information/detailed-information.component';
import { DetailedInfoService } from './services/detailed-info.service';
import { YoutubeRoutingModule} from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    YoutubeClientComponent,
    ItemCardBorderColorDirective,
    DetailedInformationComponent,
    FilterItemsByParamsPipe
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    YoutubeRoutingModule
  ],
  exports: [
    YoutubeClientComponent
  ],
  providers: [YoutubeHTTPService, DetailedInfoService]
})
export class YoutubeModule { }
