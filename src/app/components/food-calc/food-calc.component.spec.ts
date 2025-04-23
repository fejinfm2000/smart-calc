import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCalcComponent } from './food-calc.component';

describe('FoodCalcComponent', () => {
  let component: FoodCalcComponent;
  let fixture: ComponentFixture<FoodCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
