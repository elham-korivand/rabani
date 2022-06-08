import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-sidebar-account',
  templateUrl: './sidebar-account.component.html',
  styleUrls: ['./sidebar-account.component.css']
})
export class SidebarAccountComponent implements OnInit {

  constructor(private logout: LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  logOutUser() {
    this.logout.logout();
    this.router.navigate(['/']);
  }
}
