import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any;
  Items: any[] = [];
  formregister = new FormGroup({
    exampleInputEmail1: new FormControl('', Validators.required),
    exampleInputlastname: new FormControl('', Validators.required),
    exampleInputphone: new FormControl('', Validators.required),
    exampleInputstate: new FormControl('', Validators.required),
    exampleInputcity: new FormControl('', Validators.required),
    exampleFormaddress: new FormControl('', Validators.required),
    exampleInputcode: new FormControl('', Validators.required),
    exampleInputpelak: new FormControl('', Validators.required),
    exampleInputvahed: new FormControl('', Validators.required),
  });
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.shoppingCart().subscribe((res) => {
      this.cart = res;
    });
  }
  deleteItem(id: number) {
    this.cartService.removeCartItem(id).subscribe(() => {
      this.refreshCart();
    });
  }
   refreshCart() {
    this.cartService.shoppingCart().subscribe((res) => {
      this.cart = res;
    });
  }

  openModal() {
    console.log(this.formregister);
    this.formregister.reset();
  }
}
