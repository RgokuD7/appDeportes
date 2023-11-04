import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarTorneosPage } from './listar-torneos.page';

describe('ListarTorneosPage', () => {
  let component: ListarTorneosPage;
  let fixture: ComponentFixture<ListarTorneosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarTorneosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
