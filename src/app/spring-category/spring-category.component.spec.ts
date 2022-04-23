import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringCategoryComponent } from './spring-category.component';

describe('SpringCategoryComponent', () => {
  let component: SpringCategoryComponent;
  let fixture: ComponentFixture<SpringCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
