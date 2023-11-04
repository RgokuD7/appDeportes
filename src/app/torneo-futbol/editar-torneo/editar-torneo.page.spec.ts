import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarTorneoPage } from './editar-torneo.page';

describe('EditarTorneoPage', () => {
  let component: EditarTorneoPage;
  let fixture: ComponentFixture<EditarTorneoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarTorneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
