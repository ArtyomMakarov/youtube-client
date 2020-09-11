import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsPageComponent} from './pages/search-results-page/searchResultsPage.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailedInformationPage.component';

const routes: Routes = [
  { path: '', component: SearchResultsPageComponent },
  { path: 'info/:id', component: DetailedInformationPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
