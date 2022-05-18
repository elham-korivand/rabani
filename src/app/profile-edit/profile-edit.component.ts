import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {
    for (var i = 1312; i <= 1401; i++) {
      this.years.push(i);
    }
    for (var i = 1; i <= 31; i++) {
      this.day.push(i);
    }
  }
}
