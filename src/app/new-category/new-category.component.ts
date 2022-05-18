import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import{NewServiceService} from "../new-category/new-service.service";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DetailsTextileComponent } from '../details-textile/details-textile.component';
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
  providers: [NewServiceService],
})
export class NewCategoryComponent implements OnInit {
NewTextile:any=[];
modalRef!: BsModalRef;
  constructor(private newspring:NewServiceService, private modalService: BsModalService,) { }

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
   this.NewTextile=this.NewTextile.filter((item:any,index:Number)=>index<4)
    });
  }

}
