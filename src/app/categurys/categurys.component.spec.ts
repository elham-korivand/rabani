import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategurysComponent } from './categurys.component';

describe('CategurysComponent', () => {
  let component: CategurysComponent;
  let fixture: ComponentFixture<CategurysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategurysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategurysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
