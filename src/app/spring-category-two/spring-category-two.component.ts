import { Component, OnInit } from '@angular/core';
import{SpringService} from "../spring-category/spring.service"

@Component({
  selector: 'app-spring-category-two',
  templateUrl: './spring-category-two.component.html',
  styleUrls: ['./spring-category-two.component.css']
})
export class SpringCategoryTwoComponent implements OnInit {



  constructor(private SpringService: SpringService) { }
 Spring: any = [];

  ngOnInit(): void {
    this.SpringService.getSpringData().subscribe(Data=>{
this.Spring=Data.Data
    })
  }

}
