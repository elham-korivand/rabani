import { UpdateCart } from './cart.model';
import { Router } from '@angular/router';
import { DetailsTextileService } from '../details-textile/details-textile.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any;
  Items: any[] = [];
  details: any = null;
  productId: number = 0;
  ProductId: number = 0;
  meterArray: number[] = [];
  centemeterArray: number[] = [];
  modalRef!: BsModalRef;
  selectItems: any[] = [];
  metert: number = 0;
  centimeter: number = 0;
  selectedMeter: number = 0;
  selectedCm: number = 0;
  quantity: number = 0;
  copon: string = '';
  count: number = 0;
  constructor(
    private cartService: CartService,
    private DetailsTextileService: DetailsTextileService,
    private modalService: BsModalService,

  ) {}

  ngOnInit(): void {
    this.getCount();
    this.cartService.shoppingCart().subscribe((res) => {
      this.cart = res;
      console.log(this.cart)
    });
    this.DetailsTextileService.getDetailsTextile(this.productId).subscribe(
      (data) => {
        this.details = data.Data;

        const meter = Math.round(this.details.Quantity.StockQuantity);
        for (var i = 1; i <= meter; i++) {
          this.meterArray.push(i);
        }
        for (var j = 0; j <= 90; j += 5) {
          this.centemeterArray.push(j);
        }
      }
    );
  }
  // openModal(template: TemplateRef<any>, productId: number) {
  //   this.quantity = (this.selectedMeter * 100) +  (this.selectedMeter);
  //   console.log(this.selectedMeter)
  //   this.CartService.addtocart(productId, [
  //     {
  //       key: `addtocart_${productId}.EnteredQuantity`,
  //       value:1
  //     },
  //   ]).subscribe((response) => {
  //     if (response.Success) {
  //     }
  //   });

  //   this.modalRef = this.modalService.show(template);

  // }
  // CartCounter(){
  //   this.CartService.updateCartItem()
  // }
  displayHeaders() {
    let header = new HttpHeaders();
    header.append('abc', '22');
  }

  onMeterSelected(event: any) {
    this.selectedMeter = event.target.value;
    console.log(this.selectedMeter);
  }
  onCentemeterSelected(event: any) {
    this.selectedCm = event.target.value;
    console.log(this.selectedCm);
  }
  deleteItem(id: number) {
    this.cartService.removeCartItem(id).subscribe(() => {
      this.refreshCart();
      this.cartService.updateCounter();
    });
  }
  refreshCart() {
    this.cartService.shoppingCart().subscribe((res) => {
      this.cart = res;
    });
  }

  getCount() {
    this.cartService.updateCounter();
  }
}
