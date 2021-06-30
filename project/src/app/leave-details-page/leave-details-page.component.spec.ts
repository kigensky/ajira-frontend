import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDetailsPageComponent } from './leave-details-page.component';

describe('LeaveDetailsPageComponent', () => {
  let component: LeaveDetailsPageComponent;
  let fixture: ComponentFixture<LeaveDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
