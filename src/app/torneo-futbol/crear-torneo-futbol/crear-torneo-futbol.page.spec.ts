import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CrearTorneoFutbolPage } from './crear-torneo-futbol.page';
import { HttpClientModule } from '@angular/common/http';

describe('CrearTorneoFutbolPage', () => {
  let component: CrearTorneoFutbolPage;
  let fixture: ComponentFixture<CrearTorneoFutbolPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CrearTorneoFutbolPage],
    });
    fixture = TestBed.createComponent(CrearTorneoFutbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
