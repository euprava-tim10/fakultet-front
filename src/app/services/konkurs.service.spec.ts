import { TestBed } from '@angular/core/testing';

import { KonkursService } from './konkurs.service';

describe('KonkursService', () => {
  let service: KonkursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonkursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
