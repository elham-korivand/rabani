import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingfranchiseComponent } from './landingfranchise.component';

describe('LandingfranchiseComponent', () => {
  let component: LandingfranchiseComponent;
  let fixture: ComponentFixture<LandingfranchiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingfranchiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingfranchiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
