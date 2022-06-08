import { OrdersComponent } from './orders/orders.component';

import { RouterModule, Routes } from '@angular/router';
import { ProfileEditComponent } from './profile-edit.component';
import { NgModule } from '@angular/core';
import { AddressPageComponent } from './address-page/address-page.component';

const routes: Routes = [
  { path: 'account/profile', component: ProfileEditComponent },
  { path: 'account/profile/orders', component: <any>OrdersComponent },
  { path: 'account/profile/addresess', component: <any>AddressPageComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRouting {}
