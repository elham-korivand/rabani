import { Component, OnInit } from '@angular/core';
import { SpringService } from '../spring-category/spring.service';

@Component({
  selector: 'app-spring-category',
  templateUrl: './spring-category.component.html',
  styleUrls: ['./spring-category.component.css'],
  providers: [SpringService],
})
export class SpringCategoryComponent implements OnInit {
  constructor(private SpringService: SpringService) {}
  Spring: any = [];
  ngOnInit() {
    this.SpringService.getSpringData().subscribe((Data) => {
      this.Spring = Data;
      console.log(this.Spring);
    });
  }
}
