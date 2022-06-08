import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchModel } from './header.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  product(searchItem: string): Observable<any> {
    return this.http.post(
      'https://api.rabani.com/api/search/product',
      `${searchItem}`
    );
  }

}
