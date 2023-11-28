import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TorneoFutbolService } from './torneo-futbol.service';

describe('TorneoFutbolService', () => {
  let service: TorneoFutbolService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TorneoFutbolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
