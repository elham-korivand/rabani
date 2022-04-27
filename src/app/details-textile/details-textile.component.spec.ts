import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTextileComponent } from './details-textile.component';

describe('DetailsTextileComponent', () => {
  let component: DetailsTextileComponent;
  let fixture: ComponentFixture<DetailsTextileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTextileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTextileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
