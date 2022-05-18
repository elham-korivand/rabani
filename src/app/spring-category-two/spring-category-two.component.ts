import { Component, OnInit } from '@angular/core';
import{SpringService} from "../spring-category/spring.service";

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailsTextileComponent } from '../details-textile/details-textile.component';

@Component({
  selector: 'app-spring-category-two',
  templateUrl: './spring-category-two.component.html',
  styleUrls: ['./spring-category-two.component.css'],
  providers: [SpringService],
})
export class SpringCategoryTwoComponent implements OnInit {
  modalRef!: BsModalRef;


  constructor(private SpringService: SpringService,
    private modalService: BsModalService,) { }
 Spring: any = [];

 openModal(id: number) {
  const initialState = {
    productId: id,
  };
  this.modalRef = this.modalService.show(
    DetailsTextileComponent,
    Object.assign({
      initialState,
    })
  );

  this.modalRef.content.productId = id;
}
  ngOnInit(): void {
    this.SpringService.getSpringData().subscribe(Data=>{
this.Spring=Data.Data
    })
  }

}
