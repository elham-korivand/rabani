import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFabricsComponent } from './selected-fabrics.component';

describe('SelectedFabricsComponent', () => {
  let component: SelectedFabricsComponent;
  let fixture: ComponentFixture<SelectedFabricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedFabricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedFabricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
