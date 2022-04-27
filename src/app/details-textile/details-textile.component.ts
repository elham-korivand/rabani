import { Component, OnInit } from '@angular/core';
import { DetailsTextileService } from '../details-textile/details-textile.service';
@Component({
  selector: 'app-details-textile',
  templateUrl: './details-textile.component.html',
  styleUrls: ['./details-textile.component.css'],
})
export class DetailsTextileComponent implements OnInit {
  details: any = [];
  productId: number = 0;
  constructor(private DetailsTextileService: DetailsTextileService) {
    console.log('here')
  }

  ngOnInit(): void {
    console.log('productId', this.productId);
    this.DetailsTextileService.getDetailsTextile().subscribe((Data) => {
      this.details = Data.Data;
       console.log(this.details)
    });
  }
}
