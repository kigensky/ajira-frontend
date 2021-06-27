import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDetailsPageComponent } from './salary-details-page.component';

describe('SalaryDetailsPageComponent', () => {
  let component: SalaryDetailsPageComponent;
  let fixture: ComponentFixture<SalaryDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
