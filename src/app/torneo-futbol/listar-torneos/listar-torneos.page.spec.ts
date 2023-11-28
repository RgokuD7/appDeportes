import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListarTorneosPage } from './listar-torneos.page';
import { HttpClientModule } from '@angular/common/http';

describe('ListarTorneosPage', () => {
  let component: ListarTorneosPage;
  let fixture: ComponentFixture<ListarTorneosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListarTorneosPage]
    })
    fixture = TestBed.createComponent(ListarTorneosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
