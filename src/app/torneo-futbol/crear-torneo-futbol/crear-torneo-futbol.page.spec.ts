import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearTorneoFutbolPage } from './crear-torneo-futbol.page';

describe('CrearTorneoFutbolPage', () => {
  let component: CrearTorneoFutbolPage;
  let fixture: ComponentFixture<CrearTorneoFutbolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearTorneoFutbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
