import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TorneoFutbolPage } from './torneo-futbol.page';

describe('TorneoFutbolPage', () => {
  let component: TorneoFutbolPage;
  let fixture: ComponentFixture<TorneoFutbolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TorneoFutbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
