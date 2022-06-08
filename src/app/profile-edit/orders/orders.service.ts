import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  getOrders():Observable<any>{
  return  this.http.get('https://api.rabani.com/api/order/customerorder/1')
  }

}
