import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  username: any;
  islogin: boolean = true;
  timeLeft: number = 20;
  interval: any;
  resend: boolean = true;
  inputcode: any;
  CustomerGuid: any;
  step: number = 1;
  textError: boolean = false;
  codeErrorText: string = '';
  codeError: boolean = false;
  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit(): void {
    console.log('token', Token);
  }

  ngOnDestroy(): void {
    this.pauseTimer();
  }

  login() {
    this.loginservice
      .login({
        IsCall: false,
        Username: this.username,
      })
      .subscribe((response) => {

        this.step = 2;
        this.startTimer();
        this.timeLeft = 20;
        this.resend = true;
        this.CustomerGuid = response.CustomerGuid;
        this.islogin = true;
      });
  }

  register(myForm: NgForm) {
    if (myForm.valid) {
      this.login();
      this.checkCode();
      // if (this.islogin) {
      //   this.checkCode();
      // }
      // } else if (myForm.value.username == 1) {
      //   this.textError = true;
    } else {
      this.textError = true;
    }

    console.log('Successful registration');
    console.log(myForm);
  }

  checkCode() {
    this.loginservice
      .Verify({
        CustomerId: this.CustomerGuid,
        VerificationCode: this.inputcode,
      })
      .subscribe((data) => {
        if (data.ErrorList?.length) {
          console.error(data.ErrorList);
          return;
        }

        if (data.Token) {
          this.loginservice.updateLoginStatus(true);
          localStorage.setItem('token', data.Token);
          this.router.navigate(['/']);
        }
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

  // userIsLogin(){
  //   this.loginservice.UserIsLoginService({IsCall: false,
  //     Username: this.username}).subscribe((response)=>{
  //       localStorage.setItem('token',response.access_token);
  //       console.log(response.access_token)
  //     }

  //   )
  // }
}
