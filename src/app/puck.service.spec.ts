import { TestBed } from '@angular/core/testing';

import { PuckService } from './puck.service';

describe('PuckService', () => {
  let service: PuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
