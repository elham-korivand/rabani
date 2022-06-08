import { Product } from './../cart/cart.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DetailsTextileService } from '../details-textile/details-textile.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CartService } from '../cart/cart.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-details-textile',
  templateUrl: './details-textile.component.html',
  styleUrls: ['./details-textile.component.css'],
})
export class DetailsTextileComponent implements OnInit {
  details: any = null;
  productId: number = 0;
  ProductId: number = 0;
  meterArray: number[] = [];
  centemeterArray: number[] = [];
  modalRef!: BsModalRef;
  selectItems: any[] = [];
  meter: number = 0;
  centimeter: number = 0;
  selectedMeter: number = 0;
  selectedCm: number = 0;
  quantity: any;
  number: number = 0;
  close: boolean = false;
  constructor(
    private DetailsTextileService: DetailsTextileService,
    private modalService: BsModalService,
    private CartService: CartService
  ) {}

  ngOnInit(): void {
    this.DetailsTextileService.getDetailsTextile(this.productId).subscribe(
      (data) => {
        this.details = data.Data;
        console.log(this.details);

        const meter = Math.round(this.details.Quantity.StockQuantity);
        for (var i = 0; i <= meter; i++) {
          this.meterArray.push(i);
        }
        for (var j = 0; j <= 90; j += 5) {
          this.centemeterArray.push(j);
        }
      }
    );
  }
  openModal(template: TemplateRef<any>, productId: number) {
    this.quantity = `${this.selectedMeter}.${this.selectedCm}`;

    this.quantity = parseFloat(this.quantity);

    this.CartService.addtocart(productId, this.quantity).subscribe(
      (response) => {
        if (response.Success) {
          this.CartService.updateCounter();
        }
      }
    );

    this.modalRef = this.modalService.show(template);
  }
  displayHeaders() {
    let header = new HttpHeaders();
    header.append('abc', '22');
  }

  onMeterSelected(event: any) {
    this.selectedMeter = event.target.value;
    console.log(this.selectedMeter);
  }
  onCentemeterSelected(event: any) {
    this.selectedCm = event.target.value;
    console.log(this.selectedCm);
  }
}
