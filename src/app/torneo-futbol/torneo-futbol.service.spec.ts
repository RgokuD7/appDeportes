import { TestBed } from '@angular/core/testing';

import { TorneoFutbolService } from './torneo-futbol.service';

describe('TorneoFutbolService', () => {
  let service: TorneoFutbolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorneoFutbolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
