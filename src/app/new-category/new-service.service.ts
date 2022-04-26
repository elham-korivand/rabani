import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {
  constructor(private http:HttpClient) {  }
   getNewCategory():Observable<any>{
    return this.http.get("https://api.rabani.com/api/HomePage/Products?type=TYPE.TAG&query=5,15");
   }
}
