import { CartService } from './../cart/cart.service';
import { Router } from '@angular/router';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';

import { SearchService } from '../header/search.service';
import { SearchModel } from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  openmenue: boolean = false;
  submenue: boolean = false;
  Login: boolean = false;
  isAuthenticated: boolean = false;
  shopping: any;
  searchItem: any = '';

  cartCount: any = 0;
  search: SearchModel = {
    Name: '',
    Id: 0,
    Sku: 0,
    ImageUrl: '',
    OldPrice: 0,
    Price: 0,
    Categories: '',
    Discount: 0,
  };
  constructor(
    private loginService: LoginService,
    private cart: CartService,
    private logout: LoginService,
    private router: Router,
    private searchServise: SearchService
  ) {}

  ngOnInit(): void {
    this.loginService.loginStatusObservable.subscribe(
      (status) => (this.isAuthenticated = status)
    );

    this.isAuthenticated = this.loginService.checkLogin();
    this.cart.shoppingCart().subscribe((res) => (this.shopping = res));
    this.cart.cartCountObserable.subscribe((res) => (this.cartCount = res));
    this.cart.updateCartItem(this.cartCount);
  }
  SearchProduct() {
    this.searchServise.product(`${this.searchItem}`).subscribe((res) => {
      console.log(res);
    });
  }
  openmodal() {
    this.openmenue = !this.openmenue;
  }
  opensubmenue() {
    this.submenue = !this.submenue;
  }
  logOutUser() {
    this.logout.logout();
    this.router.navigate(['/']);
  }
}
