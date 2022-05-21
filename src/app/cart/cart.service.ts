import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Product} from "./cart.model"

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http:HttpClient) { }

  addtocart(id: number, productId:Product):Observable<any>{
return this.http.post(`https://api.rabani.com/api/cart/AddProductToCart/${id}/1`,productId);

  }
}
