import { ProfileRouting } from './profileRouting';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';
import { SidebarAccountComponent } from './sidebar-account/sidebar-account.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { AddressPageComponent } from './address-page/address-page.component';

const routes: Routes = [
  { path: '', component: HomeProfileComponent },
  { path: 'account/profile/orders', component: OrdersComponent },
];
@NgModule({
  declarations: [
    ProfileEditComponent,
    SidebarAccountComponent,
    OrdersComponent,
    HomeProfileComponent,
    AddressPageComponent,
  ],
  imports: [
    ProfileRouting,
    CommonModule,
    RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class ProfileMuduleModule {}
