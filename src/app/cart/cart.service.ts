import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, UpdateCart } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  private cartCount$ = new BehaviorSubject<number>(0);
  cartCountObserable = this.cartCount$.asObservable();

  addtocart(productId: number, quantity: number): Observable<any> {
    return this.http.post(
      `https://api.rabani.com/api/cart/AddProductToCart/${productId}/1`,
      [
        {
          key: `addtocart_${productId}.EnteredQuantity`,
          value: quantity,
        },
      ]
    );
  }
  updateCartItem(cartCount: number) {
    this.cartCount$.next(cartCount);
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
  // ApplyDiscountCoupon(value:"tajrish-10"){
  //   return this.http.post('https://api.rabani.com/api/cart/ShoppingCart/ApplyDiscountCoupon',value)
  // }
  updateCounter() {
    this.http
      .get<any>('https://api.rabani.com/api/cart/ShoppingCart/count')
      .subscribe((data) => this.updateCartItem(data.ItemsCount));
  }
}
