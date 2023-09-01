import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPartidosPage } from './menu-partidos.page';

describe('MenuPartidosPage', () => {
  let component: MenuPartidosPage;
  let fixture: ComponentFixture<MenuPartidosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuPartidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
