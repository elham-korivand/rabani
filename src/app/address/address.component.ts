import { Router } from '@angular/router';

import { Component, Input, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AddressService } from './address.service';
import {
  AddAddressModel,
  UserAddress,
  CustomerOrderUser,
} from './address.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  State: any = null;
  city: any;
  saveid: number = 0;
  name: any;
  submit: boolean = false;
  checked: boolean = false;
  selectedAddressId: number = 0;
  addressInformation: any;
  orderTotal: number = 0;
  addresses: UserAddress[] = [];
  shopping: any;
  address: AddAddressModel = {
    firstName: '',
    lastName: '',
    City: '',
    PhoneNumber: 0,
    Plaque: 0,
    Address1: '',
    StateProvinceId: 0,
    Unit: 0,
    ZipPostalCode: 0,
  };
  // validatingForm = new FormGroup({
  //   exampleInputEmail1: new FormControl(null, Validators.required),
  //   exampleInputlastname: new FormControl(null, Validators.required),
  //   exampleInputphone: new FormControl(null, Validators.required),
  //   exampleInputstate: new FormControl(null, Validators.required),
  //   exampleInputcity: new FormControl(null, Validators.required),
  //   exampleFormaddress: new FormControl(null, Validators.required),
  //   exampleInputcode: new FormControl(null, Validators.required),
  //   exampleInputpelak: new FormControl(null, Validators.required),
  //   exampleInputvahed: new FormControl(null, Validators.required),
  // });

  constructor(private router: Router, private addressService: AddressService) {}

  ngOnInit(): void {
    this.getstete();
    this.getcity(this.saveid);
    this.getAddresses();
    this.getOrderTotal();
  }

  getOrderTotal() {
    this.addressService
      .CheckoutOrderInformation()
      .subscribe((data) => (this.orderTotal = data.OrderTotalModel.OrderTotal));
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.submit = true;
  }

  onSelectAddress(addressId: number, PointerEvent: any) {
    if (PointerEvent.target.checked) {
      this.selectedAddressId = addressId;
      const address = this.addresses.find(x => x.Id == addressId);
      this.addressService.saveToMemory({
        addressId: address?.Id,
        addressDetail: `${address?.StateProvinceName} - ${address?.City} - ${address?.Address1}`
      });
    }
  }

  onConfirmAddress() {
    if (!this.selectedAddressId) {
      alert('ابتدا یک آدرس انتخاب کنید');
      return;
    }
    this.addressService
      .saveSelectedAddress(this.selectedAddressId)
      .subscribe((data) => {
        this.router.navigate(['shipping']);
      });
  }
  getcartService() {
    this.addressService.CheckoutOrderInformation().subscribe((Data) => {
      console.log(Data);
    });
  }
  getAddresses() {
    this.addressService.getAddresses().subscribe((data) => {
      this.addresses = data.ExistingAddresses;
      console.log(this.addresses);
    });
  }

  getstete() {
    this.addressService.getState().subscribe((Data) => {
      this.State = Data.Data;
    });
  }

  getcity(event: any) {
    this.saveid = event.target?.value;
    if (this.saveid) {
      this.addressService.getCity(this.saveid).subscribe((Data) => {
        this.city = Data.Data;
      });
    }
  }

  addAddress() {
    this.addressService
      .addAddress([
        { value: this.address?.firstName, key: 'ShippingNewAddress.FirstName' },
        { value: this.address?.lastName, key: 'ShippingNewAddress.LastName' },
        {
          value: +this.address?.StateProvinceId,
          key: 'ShippingNewAddress.StateProvinceId',
        },

        { value: +this.address?.City, key: 'ShippingNewAddress.CityId' },
        { value: this.address?.Address1, key: 'ShippingNewAddress.Address1' },
        {
          value: this.address?.ZipPostalCode,
          key: 'ShippingNewAddress.ZipPostalCode',
        },
        {
          value: this.address?.PhoneNumber,
          key: 'ShippingNewAddress.PhoneNumber',
        },
        { value: +this.address?.Plaque, key: 'ShippingNewAddress.Plaque' },
        { value: +this.address?.Unit, key: 'ShippingNewAddress.Unit' },
      ])
      .subscribe((res) => {
        this.selectedAddressId = res.Data.AddressId;
        this.getAddresses();
      });
  }
}
