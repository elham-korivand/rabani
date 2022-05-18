import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingfranchiseComponent } from './landingfranchise/landingfranchise.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpringCategoryTwoComponent } from './spring-category-two/spring-category-two.component';
import { NewCategoryTwoComponent } from './new-category-two/new-category-two.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { VarietyOfFabricComponent } from './variety-of-fabric/variety-of-fabric.component';
import { LoginComponent } from './login/login.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"landing/franchise", component:<any> LandingfranchiseComponent} ,
  {path:"contact-us", component:<any> ContactUsComponent},
  {path:"about-us", component:<any> AboutUsComponent},
  {path:"spring-textile", component:<any> SpringCategoryTwoComponent},
  {path:"new-textile", component:<any> NewCategoryTwoComponent},

  {path:"product/:id", component:<any> LandingfranchiseComponent} ,
  {path:"order/card", component:<any> CartComponent} ,
  {path:"category/انواع پارچه", component:<any> VarietyOfFabricComponent} ,
  {path:"login", component:<any> LoginComponent} ,
  {path:"account/profile", component:<any> ProfileEditComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
