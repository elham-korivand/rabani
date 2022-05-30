import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControlName, FormGroupName } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }
getstate(): Observable<any>{
 return this.http.get('https://api.rabani.com/api/Country/GetStatesByCountryId/55');
}
getcity(id:any): Observable<any>{
  return this.http.get('https://api.rabani.com/api/country/getcitybystatesid/'+`${id}`)
}
addressuser(value:any=`${FormGroupName}`,key:any="ShippingNewAddress"+`${FormControlName}`){
return this.http.post('https://api.rabani.com/api/Checkout/CheckoutSaveAdress/2',{value,key});
}
}
