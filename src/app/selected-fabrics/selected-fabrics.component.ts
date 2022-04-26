import { Component, OnInit } from '@angular/core';
import { SpringService } from "../spring-category/spring.service";

@Component({
  selector: 'app-selected-fabrics',
  templateUrl: './selected-fabrics.component.html',
  styleUrls: ['./selected-fabrics.component.css']
})
export class SelectedFabricsComponent implements OnInit {
  NewTextile:any=[];
  constructor(private newspring:SpringService) { }

  ngOnInit(): void {
    this.newspring.getSpringData().subscribe(Data=>{
      this.NewTextile=Data.Data;
      this.NewTextile=this.NewTextile.filter((item:any,index:Number)=>index<8)
       });
  }

}
