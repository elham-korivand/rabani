import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http:HttpClient) { }


  CheckoutGetShippingMethods(): Observable<any>{
    return this.http.get('https://api.rabani.com/api/Checkout/CheckoutGetShippingMethods')
  }

}
