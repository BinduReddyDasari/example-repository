import { TestBed } from '@angular/core/testing';

import { GetvegetablesService } from './getvegetables.service';

describe('GetvegetablesService', () => {
  let service: GetvegetablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetvegetablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
