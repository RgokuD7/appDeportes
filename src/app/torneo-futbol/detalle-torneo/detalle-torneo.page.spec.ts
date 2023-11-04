import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleTorneoPage } from './detalle-torneo.page';

describe('DetalleTorneoPage', () => {
  let component: DetalleTorneoPage;
  let fixture: ComponentFixture<DetalleTorneoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleTorneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
