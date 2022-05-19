import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-landingfranchise',
  templateUrl: './landingfranchise.component.html',
  styleUrls: ['./landingfranchise.component.css'],
})
export class LandingfranchiseComponent implements OnInit {
  owners = [
    { iamowner: true, item: 'مالک هستم' },
    { iamowner: false, item: 'مالک نیستم' },
  ];
  alert = false;
  formregister = new FormGroup({
    name: new FormControl(null, Validators.required),
    number: new FormControl(null, Validators.required),
    NationalCode: new FormControl(null, Validators.required),
    RegionalMunicipality: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    iamowner: new FormControl(null, Validators.required),
    earth: new FormControl(null, Validators.required),
    Area: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formregister);
    this.formregister.reset();
  }
}
