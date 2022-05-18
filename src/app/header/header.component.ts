import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  openmenue:boolean=false;
  submenue:boolean=false
  constructor() {}

  ngOnInit(): void {}

  openmodal(){
    this.openmenue=!this.openmenue;
  }
  opensubmenue(){
this.submenue=!this.submenue
  }
}
