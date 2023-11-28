import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RecuperarContraPage } from './recuperar-contra.page';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { environment } from 'src/environments/environment';

describe('RecuperarContraPage', () => {
  let component: RecuperarContraPage;
  let fixture: ComponentFixture<RecuperarContraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig), // Proporciona la configuración de Firebase aquí
        FormsModule // Asegúrate de importar FormsModule aquí
      ],
      declarations: [RecuperarContraPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
