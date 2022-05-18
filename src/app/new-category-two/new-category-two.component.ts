import { Component, OnInit } from '@angular/core';
import{NewServiceService} from "../new-category/new-service.service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailsTextileComponent } from '../details-textile/details-textile.component';
@Component({
  selector: 'app-new-category-two',
  templateUrl: './new-category-two.component.html',
  styleUrls: ['./new-category-two.component.css']
})
export class NewCategoryTwoComponent implements OnInit {
  modalRef!: BsModalRef;
  NewTextile:any=[];
  constructor(private newspring:NewServiceService, private modalService: BsModalService,) { }
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
    this.newspring.getNewCategory().subscribe(Data=>{
      this.NewTextile=Data.Data;
    }
    )}
}
