import { UserLogin, UserVerifyCode } from './login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginSubject$ = new BehaviorSubject<boolean>(false);

  loginStatusObservable = this.loginSubject$.asObservable();

  constructor(private http: HttpClient) {}

  login(login: UserLogin): Observable<any> {
    return this.http.post(
      'https://api.rabani.com/api/authentication/Login',
      login
    );
  }

  updateLoginStatus(isLoggined: boolean) {
    this.loginSubject$.next(isLoggined);
  }

  Verify(login: UserVerifyCode): Observable<any> {
    return this.http.post(
      'https://api.rabani.com/api/authentication/VerifyCode',
      login
    );
  }

  checkLogin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('token', token);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.clear();
    this.updateLoginStatus(false);
  }
}
