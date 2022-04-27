import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DetailsTextileService {

  constructor(private http:HttpClient) { }
  getDetailsTextile():Observable<any> {
    return this.http.get(
      'https://api.rabani.com/api/catalog/ProductDetails/10249'
    );
  }
}
