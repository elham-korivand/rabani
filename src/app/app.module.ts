import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { ApplicationBannerComponent } from './application-banner/application-banner.component';
import { CategurysComponent } from './categurys/categurys.component';
import { SpringCategoryComponent } from './spring-category/spring-category.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ApplicationBannerComponent,
    CategurysComponent,
    SpringCategoryComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
