import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MenuPartidosPage } from './menu-partidos.page';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule

describe('MenuPartidosPage', () => {
  let component: MenuPartidosPage;
  let fixture: ComponentFixture<MenuPartidosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MenuPartidosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPartidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
