import { TestBed } from '@angular/core/testing';

import { GetcoloursService } from './getcolours.service';

describe('GetcoloursService', () => {
  let service: GetcoloursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcoloursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
