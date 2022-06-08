import { Component, OnInit } from '@angular/core';
import { Order } from './order.model';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  rows: number[] = [];
  constructor(private orderservice: OrdersService) {}

  ngOnInit(): void {
    this.orderservice.getOrders().subscribe((Data) => {
      this.orders = Data.orders;
    });
    for (var i = 1; i <= 10; i++) {
      this.rows.push(i);
      console.log(i);
    }
  }
}
