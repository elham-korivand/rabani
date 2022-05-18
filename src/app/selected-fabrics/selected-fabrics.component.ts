import { Component, OnInit } from '@angular/core';
import { SpringService } from "../spring-category/spring.service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailsTextileComponent } from '../details-textile/details-textile.component';

@Component({
  selector: 'app-selected-fabrics',
  templateUrl: './selected-fabrics.component.html',
  styleUrls: ['./selected-fabrics.component.css']
})
export class SelectedFabricsComponent implements OnInit {
  NewTextile:any=[];
  modalRef!: BsModalRef;
  constructor(private newspring:SpringService,private modalService: BsModalService) { }

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
    this.newspring.getSpringData().subscribe(Data=>{
      this.NewTextile=Data.Data;
      this.NewTextile=this.NewTextile.filter((item:any,index:Number)=>index<8)
       });
  }

}
