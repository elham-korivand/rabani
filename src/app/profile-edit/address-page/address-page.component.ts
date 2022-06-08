import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/address/address.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css'],
})
export class AddressPageComponent implements OnInit {
  addresess: any[] = [];

  constructor(
    private addressservice: AddressService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.getaddress();
  }
  getaddress() {
    this.addressservice.getAddresses().subscribe((res) => {
      this.addresess = res.ExistingAddresses;
      console.log(this.addresess);
    });
  }
  removeAdress(id: number, index: number) {
    this.addresess.splice(index, 1);
  }
}
