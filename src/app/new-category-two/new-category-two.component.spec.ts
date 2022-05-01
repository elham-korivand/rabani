import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCategoryTwoComponent } from './new-category-two.component';

describe('NewCategoryTwoComponent', () => {
  let component: NewCategoryTwoComponent;
  let fixture: ComponentFixture<NewCategoryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCategoryTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCategoryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
