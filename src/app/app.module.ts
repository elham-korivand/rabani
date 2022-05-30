import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { ApplicationBannerComponent } from './application-banner/application-banner.component';
import { CategurysComponent } from './categurys/categurys.component';
import { SpringCategoryComponent } from './spring-category/spring-category.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { SpringCategoryTwoComponent } from './spring-category-two/spring-category-two.component';
import { NewCategoryTwoComponent } from './new-category-two/new-category-two.component';
import { CartComponent } from './cart/cart.component';

import { VarietyOfFabricComponent } from './variety-of-fabric/variety-of-fabric.component';
import { LoginComponent } from './login/login.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { TokenInterceptor } from './login/interceptor.service';
import { AddressComponent } from './address/address.component';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping/shipping.component';
import { PaymentComponent } from './payment/payment.component';


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
    SpringCategoryTwoComponent,
    NewCategoryTwoComponent,
    CartComponent,
    VarietyOfFabricComponent,
    LoginComponent,
    ProfileEditComponent,
    AddressComponent,
    ShippingComponent,
    PaymentComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    BsModalService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
