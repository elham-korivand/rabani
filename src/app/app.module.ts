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
import { NewCategoryComponent } from './new-category/new-category.component';
import { SelectedFabricsComponent } from './selected-fabrics/selected-fabrics.component';
import { FooterComponent } from './footer/footer.component';
import { LandingfranchiseComponent } from './landingfranchise/landingfranchise.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { DetailsTextileComponent } from './details-textile/details-textile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ApplicationBannerComponent,
    CategurysComponent,
    SpringCategoryComponent,
    NewCategoryComponent,
    SelectedFabricsComponent,
    FooterComponent,
    LandingfranchiseComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    DetailsTextileComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule, BrowserAnimationsModule,ModalModule],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
