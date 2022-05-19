import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.isAuthenticated = this.loginService.checkLogin();
  }

  openmodal(){
    this.openmenue=!this.openmenue;
  }
  opensubmenue(){
this.submenue=!this.submenue
  }
}
