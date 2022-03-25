import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, HeroComponent, NavbarComponent],
  imports: [BrowserModule, NgbPaginationModule, NgbAlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
