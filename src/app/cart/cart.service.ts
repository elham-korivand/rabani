import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, UpdateCart } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  addtocart(id: number, productId: Product[]): Observable<any> {
    return this.http.post(
      `https://api.rabani.com/api/cart/AddProductToCart/${id}/1`,
      productId
    );
  }
  shoppingCart() {
    return this.http.get('https://api.rabani.com/api/cart/ShoppingCart');
  }

  removeCartItem(productId: number) {

    return this.http.post(
      'https://api.rabani.com/api/cart/ShoppingCart/UpdateCart',
      [{ key: 'removefromcart', value: productId }]

    );
  }
}
