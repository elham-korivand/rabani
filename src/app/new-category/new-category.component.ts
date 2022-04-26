import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import{NewServiceService} from "../new-category/new-service.service"
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
  providers: [NewServiceService],
})
export class NewCategoryComponent implements OnInit {
NewTextile:any=[];
  constructor(private newspring:NewServiceService) { }

  ngOnInit(): void {

    this.newspring.getNewCategory().subscribe(Data=>{
   this.NewTextile=Data.Data;
   this.NewTextile=this.NewTextile.filter((item:any,index:Number)=>index<4)
    });
  }

}
