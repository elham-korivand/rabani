import { CartService } from './cart/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export default class AppComponent implements OnInit {
  title = 'rabani-angular';
  constructor(public router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.updateCounter();
  }
}
