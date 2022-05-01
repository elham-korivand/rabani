import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DetailsTextileService {
  constructor(private http: HttpClient) {}
  getDetailsTextile(productId: any): Observable<any> {
    return this.http.get(
      'https://api.rabani.com/api/catalog/ProductDetails/' + productId
    );
  }
  // getquantety(ProductId:any){
  //   return this.quantity.get("https://api.rabani.com/api/catalog/product/ProductsQuantityData/"+ProductId)

  // }
}
