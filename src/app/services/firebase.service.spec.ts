import { TestBed } from '@angular/core/testing';
import { FirebaseService } from './firebase.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment'; // Asegúrate de tener tus configuraciones de Firebase aquí

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig), // Proporciona la configuración de Firebase aquí
      ],
      providers: [FirebaseService],
    });
    service = TestBed.inject(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
