import { ComponentFixture, TestBed, waitForAsync  } from '@angular/core/testing';
import { DetalleTorneoPage } from './detalle-torneo.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetalleTorneoPage', () => {
  let component: DetalleTorneoPage;
  let fixture: ComponentFixture<DetalleTorneoPage>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [DetalleTorneoPage]
    });
    fixture = TestBed.createComponent(DetalleTorneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
