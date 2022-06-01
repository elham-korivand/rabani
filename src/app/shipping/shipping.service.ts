import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http:HttpClient) { }


  CheckoutGetShippingMethods(){
    return this.http.get('https://api.rabani.com/api/Checkout/CheckoutGetShippingMethods')
  }
}
