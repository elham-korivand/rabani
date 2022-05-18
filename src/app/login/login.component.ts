import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string = '';
  islogin: boolean = true;
  timeLeft: number = 20;
  interval: any;
  resend: boolean = true;
  inputcode:any;
  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.pauseTimer();
  }

  login() {
    this.loginservice
      .login({
        IsCall: false,
        Username: this.username,
      })
      .subscribe(() => {
        this.islogin = !this.login;
        this.startTimer();
        this.timeLeft = 20;
        this.resend = true;
      });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.resend = false;
        this.pauseTimer();
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  userIsLogin(){
    this.loginservice.UserIsLoginService({CustomerId:"",VerificationCode:this.inputcode}).subscribe(res=>console.log(this.inputcode))
  }
}
