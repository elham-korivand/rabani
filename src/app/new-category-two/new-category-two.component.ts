import { Component, OnInit } from '@angular/core';
import{NewServiceService} from "../new-category/new-service.service";
@Component({
  selector: 'app-new-category-two',
  templateUrl: './new-category-two.component.html',
  styleUrls: ['./new-category-two.component.css']
})
export class NewCategoryTwoComponent implements OnInit {
  NewTextile:any=[];
  constructor(private newspring:NewServiceService) { }

  ngOnInit(): void {
    this.newspring.getNewCategory().subscribe(Data=>{
      this.NewTextile=Data.Data;
    }
    )}
}
