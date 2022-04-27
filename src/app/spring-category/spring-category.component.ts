import { Component, OnInit, TemplateRef } from '@angular/core';
import { filter } from 'rxjs';
import { SpringService } from '../spring-category/spring.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailsTextileComponent } from '../details-textile/details-textile.component';
@Component({
  selector: 'app-spring-category',
  templateUrl: './spring-category.component.html',
  styleUrls: ['./spring-category.component.css'],
  providers: [SpringService],
})
export class SpringCategoryComponent implements OnInit {
  modalRef!: BsModalRef;

  constructor(
    private SpringService: SpringService,
    private modalService: BsModalService
  ) {}

  Spring: any = [];
  openModal(id: number) {
    this.modalRef = this.modalService.show(DetailsTextileComponent);
    this.modalRef.content.productId = id;
  }
  ngOnInit() {
    this.SpringService.getSpringData().subscribe((Data) => {
      this.Spring = Data.Data;
      this.Spring = this.Spring.filter((item: any, index: number) => index < 4);
    });
  }
}
