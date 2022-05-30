import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { AddressService } from './address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  State: any = null;
  City: any = null;
  saveid: number = 0;
  name: any ;
  submit:boolean=false;
  checked: boolean = false;
  validatingForm = new FormGroup({
    exampleInputEmail1: new FormControl(null, Validators.required),
    exampleInputlastname: new FormControl(null, Validators.required),
    exampleInputphone: new FormControl(null, Validators.required),
    exampleInputstate: new FormControl(null, Validators.required),
    exampleInputcity: new FormControl(null, Validators.required),
    exampleFormaddress: new FormControl(null, Validators.required),
    exampleInputcode: new FormControl(null, Validators.required),
    exampleInputpelak: new FormControl(null, Validators.required),
    exampleInputvahed: new FormControl(null, Validators.required),
  });

  constructor(private router: Router, private address: AddressService) {}

  ngOnInit(): void {
    this.getstete();
    this.getcity(this.saveid);

  }
  onSubmit() {
    console.log(this.validatingForm);
this.submit=true;

  }
  checkValue(PointerEvent: any) {
    console.log(PointerEvent.target.checked);
    this.checked = PointerEvent.target.checked;
  }
  alertAdress() {
    if (!this.checked) {
      alert('ابتدا یک آدرس انتخاب کنید');
    } else {
      this.router.navigate(['shipping']);
    }
  }
  getstete() {
    this.address.getstate().subscribe((Data) => {
      this.State = Data.Data;
    });
  }
  getcity(event: any) {
    this.saveid = event.target.value;
    console.log(event);
    this.address.getcity(this.saveid).subscribe((Data) => {
      this.City = Data.Data;
    });
  }
  addadress(){
    this.address.addressuser([{value:FormControlName.name,key:"ShippingNewAddress"+FormControlName}]).subscribe(res=>console.log(res))
  }
}
