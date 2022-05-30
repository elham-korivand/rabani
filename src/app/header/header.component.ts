import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import{CartService} from "../cart/cart.service";


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
  constructor(private loginService: LoginService,private cart:CartService) {}

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
}
