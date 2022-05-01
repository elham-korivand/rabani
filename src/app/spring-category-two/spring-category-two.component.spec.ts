import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringCategoryTwoComponent } from './spring-category-two.component';

describe('SpringCategoryTwoComponent', () => {
  let component: SpringCategoryTwoComponent;
  let fixture: ComponentFixture<SpringCategoryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringCategoryTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringCategoryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
