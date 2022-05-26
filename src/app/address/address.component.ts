import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  checked:boolean=false;
  formregister = new FormGroup({
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

  constructor() { }

  ngOnInit(): void {
  }
  openModalForm() {
    console.log(this.formregister);

  }
  checkValue(PointerEvent:any){
console.log(PointerEvent.target.checked);
this.checked=PointerEvent.target.checked
  }
  alertAdress(){
    if(!this.checked){
      alert("ابتدا یک آدرس انتخاب کنید")
    }
  }
}
