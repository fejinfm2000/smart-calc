import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCareCalcComponent } from './health-care-calc.component';

describe('HealthCareCalcComponent', () => {
  let component: HealthCareCalcComponent;
  let fixture: ComponentFixture<HealthCareCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthCareCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCareCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
