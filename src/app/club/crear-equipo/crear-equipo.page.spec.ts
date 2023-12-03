import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearEquipoPage } from './crear-equipo.page';

describe('CrearEquipoPage', () => {
  let component: CrearEquipoPage;
  let fixture: ComponentFixture<CrearEquipoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
