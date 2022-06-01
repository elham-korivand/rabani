import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControlName, FormGroupName } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  addressSubject$ = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  saveToMemory(addressInfo: any) {
    this.addressSubject$.next(addressInfo);
  }

  getState(): Observable<any> {
    return this.http.get(
      'https://api.rabani.com/api/Country/GetStatesByCountryId/55'
    );
  }

  getCity(id: any): Observable<any> {
    return this.http.get(
      'https://api.rabani.com/api/country/getcitybystatesid/' + `${id}`
    );
  }

  addAddress(address: any): Observable<any> {
    return this.http.post(
      'https://api.rabani.com/api/Checkout/CheckoutSaveAdress/2',
      address
    );
  }

  saveSelectedAddress(addressId: number): Observable<any> {
    return this.http.post(
      'https://api.rabani.com/api/Checkout/CheckoutSaveAdressId/2',
      {
        value: addressId,
      }
    );
  }

  getAddresses(): Observable<any> {
    return this.http.get<any>('https://api.rabani.com/api/Customer/Addresses');
  }

  CheckoutOrderInformation(): Observable<any> {
    return this.http.get(
      'https://api.rabani.com/api/checkout/ShoppingCart/CheckoutOrderInformation'
    );
  }
  CustomerOrders(): Observable<any> {
    return this.http.get(
      'https://api.rabani.com/api/customer/Order/CustomerOrders'
    );
  }
}
