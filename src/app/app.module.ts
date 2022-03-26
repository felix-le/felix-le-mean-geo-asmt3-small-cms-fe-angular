import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
// Api providers
import { SectionApiService } from './services/sectionApi.service';
import { ProjectApiService } from './services/projectApi.service';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
  ],
  providers: [SectionApiService, ProjectApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
