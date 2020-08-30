import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    NotFoundComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
