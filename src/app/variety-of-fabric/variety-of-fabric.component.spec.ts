import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarietyOfFabricComponent } from './variety-of-fabric.component';

describe('VarietyOfFabricComponent', () => {
  let component: VarietyOfFabricComponent;
  let fixture: ComponentFixture<VarietyOfFabricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarietyOfFabricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarietyOfFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
