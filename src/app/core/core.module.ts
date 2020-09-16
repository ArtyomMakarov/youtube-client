import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundPageComponent } from './pages/not-found-page/notFoundPage.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    NotFoundPageComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
