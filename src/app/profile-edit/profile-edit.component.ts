import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
  formRegister=new FormGroup({
    name:new FormControl(null,Validators.required),
    lastname:new FormControl(null,Validators.required),
    phonenumber:new FormControl(null,Validators.required),
    job:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email]),
    yeare:new FormControl(null,Validators.required),
    month:new FormControl(null,Validators.required),
    day:new FormControl(null,Validators.required),


  })
  years: number[] = [];
  month: string[] = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];
  day: number[] = [];
  showtext:boolean=false;
  validationform:boolean=false;
  constructor() {}

  ngOnInit(): void {
    for (var i = 1312; i <= 1401; i++) {
      this.years.push(i);
    }
    for (var i = 1; i <= 31; i++) {
      this.day.push(i);
    }
  }
  Register(){
    // console.log(this.formRegister);
    if(this.formRegister.valid==false ){
    //  this.validationform=!this.validationform;
    alert('لطفا تمامی فیلدها را کامل کنید ')
     console.log(this.validationform)

    }
  }
}
