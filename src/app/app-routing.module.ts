import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingfranchiseComponent } from './landingfranchise/landingfranchise.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpringCategoryComponent } from './spring-category/spring-category.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"landing/franchise", component:<any> LandingfranchiseComponent} ,
  {path:"contact-us", component:<any> ContactUsComponent},
  {path:"about-us", component:<any> AboutUsComponent},
  {path:"spring-textile", component:<any> SpringCategoryComponent},
  {path:"new-textile", component:<any> NewCategoryComponent},
  {path:"product/:id", component:<any> LandingfranchiseComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
