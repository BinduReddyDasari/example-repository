import { TestBed } from '@angular/core/testing';

import { GetfamilyService } from './getfamily.service';

describe('GetfamilyService', () => {
  let service: GetfamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetfamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
