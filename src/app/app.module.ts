import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  NgbPaginationModule,
  NgbAlertModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
// Api providers
import { SectionApiService } from './services/sectionApi.service';
import { ProjectApiService } from './services/projectApi.service';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbPaginationModule,
    NgbAlertModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [SectionApiService, ProjectApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
