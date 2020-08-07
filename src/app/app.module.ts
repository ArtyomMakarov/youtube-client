// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { RegistrationModalComponent } from './components/registration-modal/registration-modal.component';
import { LogoComponent } from './components/logo/logo.component';
import {YoutubeClientService} from './services/youtube-client.service';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { ItemCardBorderColorDirective } from './directives/item-card-border-color.directive';
// angular-material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { YoutubeClientComponent } from './components/youtube-client/youtube-client.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    RegistrationModalComponent,
    LogoComponent,
    YoutubeClientComponent,
    ItemCardBorderColorDirective,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [YoutubeClientService, FilterByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
