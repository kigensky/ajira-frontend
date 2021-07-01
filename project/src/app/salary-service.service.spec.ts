import { TestBed } from '@angular/core/testing';

import { SalaryService } from './/salary-service.service';

describe('SalaryServiceService', () => {
  let service: SalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
