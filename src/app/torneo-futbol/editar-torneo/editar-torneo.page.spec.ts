import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditarTorneoPage } from './editar-torneo.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditarTorneoPage', () => {
  let component: EditarTorneoPage;
  let fixture: ComponentFixture<EditarTorneoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [EditarTorneoPage],
    });
    fixture = TestBed.createComponent(EditarTorneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
