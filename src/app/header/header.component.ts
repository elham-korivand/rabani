import { Router } from '@angular/router';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import{CartService} from "../cart/cart.service";
import { HttpBackend, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  openmenue:boolean=false;
  submenue:boolean=false;
  Login:boolean=false;
  isAuthenticated: boolean = false;
  shopping:any;
  constructor(private loginService: LoginService,private cart:CartService,private logout:LoginService,private router:Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.loginService.checkLogin();
    this.cart.shoppingCart().subscribe(res=>this.shopping=res
    )

  }

  openmodal(){
    this.openmenue=!this.openmenue;
  }
  opensubmenue(){
this.submenue=!this.submenue
  }
  logOutUser(){
this.logout.logout()

  }
}
