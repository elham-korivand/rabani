import { Product } from './../cart/cart.model';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DetailsTextileService } from '../details-textile/details-textile.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CartService } from '../cart/cart.service';

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

  constructor(
    private DetailsTextileService: DetailsTextileService,
    private modalService: BsModalService,
    private CartService: CartService
  ) {}

  ngOnInit(): void {
    this.DetailsTextileService.getDetailsTextile(this.productId).subscribe(
      (data) => {
        this.details = data.Data;
        console.log(data);

        const meter = Math.round(this.details.Quantity.StockQuantity);
        for (var i = 1; i <= meter; i++) {
          this.meterArray.push(i);
        }
        for (var j = 0; j <= 90; j += 5) {
          this.centemeterArray.push(j);
        }
      }
    );
  }
  openModal(template: TemplateRef<any>, productId: number) {
    this.CartService.addtocart(productId, {
      key: `addtocart_${productId}.EnteredQuantity`,
      value: this.meter + this.centimeter,
    }).subscribe((response) => {
      if (response.Success) {
        console.log('response', response);
      }
    });

    this.modalRef = this.modalService.show(template);
  }
}
