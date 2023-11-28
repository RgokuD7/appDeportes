import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import {
  NavController,
  Animation,
  AnimationController,
  IonCard,
  LoadingController,
} from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {
  @ViewChild('miFormulario', { static: false }) formulario: any;

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ) {}

  firebaseSvc = inject(FirebaseService);
  loadingController = inject(LoadingController);
  utilSvc = inject(UtilsService);

  ngOnInit() {}

  correo = '';
  validacion = false;
  correoNoIngresado = false;
  correoInvalido = false;
  correoNoEncontrado = false;
  EmailInput() {
    const correo = this.correo;
    this.correoNoEncontrado = false;
    if (correo == '') {
      this.correoNoIngresado = true;
      this.correoInvalido = false;
      this.validacion = false;
    } else {
      this.correoNoIngresado = false;
      const patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const correo_valido = patronCorreo.test(correo);
      if (!correo_valido) {
        this.correoInvalido = true;
        this.validacion = false;
      } else {
        this.correoInvalido = false;
        this.validacion = true;
      }
    }
  }

  onWillDismiss() {
    this.navCtrl.navigateForward('login');
  }

  @ViewChild('modal') modal: any;
  async onSubmit() {
    if (!this.correo) {
      this.correoNoIngresado = true;
      this.validacion = false;
    } else if (this.correoInvalido) {
      this.validacion = false;
    }
    if (this.validacion) {
      const cargando = await this.loadingController.create({
        message: 'Enviando email de recuperación',
        cssClass: 'modal-cargando',
        duration: 300,
      });
      // Muestra el Loading Controller
      await cargando.present();
      this.firebaseSvc
        .sendRecoberyEmail(this.correo)
        .then((res) => {
          this.modal.present();
        })
        .catch((error) => {
          if (error.code == 'auth/user-not-found') {
            this.correoNoEncontrado = true;
          }
        })
        .finally(() => {
          cargando.dismiss();
        });
    }
  }
}
