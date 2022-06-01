import { Component, OnInit } from '@angular/core';
import { ShippingService } from './shipping.service';
import { AddressService } from '../address/address.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  totalPrice: number = 0;

  shipping: any;
  constructor(
    private shippingService: ShippingService,
    private addressService: AddressService
  ) {}

  address: string = '';

  ngOnInit(): void {
    this.getTotalPrice();
    this.addressService.addressSubject$.subscribe((data: any) => {
      this.address = data.addressDetail;
    });
  }
  selectedPost() {
    this.shippingService.CheckoutGetShippingMethods().subscribe((res) => {
      this.shipping = res;

    });
  }
  getTotalPrice() {
    this.addressService.CheckoutOrderInformation().subscribe((data) => {
      this.totalPrice = data.OrderTotalModel.OrderTotal;
    });
  }
}
