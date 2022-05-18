import { UserLogin,Register } from './login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(login: UserLogin): Observable<any> {
    return this.http.post(
      'https://api.rabani.com/api/authentication/Login',
      login
    );
  }

  UserIsLoginService(register: Register):Observable<any>{
  return  this.http.post('https://api.rabani.com/api/authentication/VerifyCode',register)
  }
}
