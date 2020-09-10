import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsComponent} from './components/search-results/search-results.component';
import { DetailedInformationComponent } from './components/detailed-information/detailed-information.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: 'info/:id', component: DetailedInformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
