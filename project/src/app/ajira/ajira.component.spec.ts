import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjiraComponent } from './ajira.component';

describe('AjiraComponent', () => {
  let component: AjiraComponent;
  let fixture: ComponentFixture<AjiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
