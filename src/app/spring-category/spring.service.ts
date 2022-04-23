import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpringService {
  constructor(private http: HttpClient) {}

  getSpringData() {
    return this.http.get(
      'https://api.rabani.com/api/HomePage/Products?type=TYPE.CATEGORY&query=133,0'
    );
  }
}
