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
import { Router, NavigationExtras } from '@angular/router';
import { Clusuario } from '../usuario/model/ClUsuario';
import { UsuarioService } from '../usuario/usuario.service';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('miFormulario', { static: false }) formulario: any;
  @ViewChild(IonCard, { read: ElementRef }) card: any;

  private animation: Animation;

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private router: Router,
    private restApi: UsuarioService
  ) {
    this.animation = this.animationCtrl.create();
  }

  firebaseSvc = inject(FirebaseService);
  loadingController = inject(LoadingController);
  utilSvc = inject(UtilsService);
  usuario = new Clusuario();

  validacion = false;

  email = '';
  correoInvalido = false;
  correoNoIngresado = false;

  emailChange() {
    const email = this.email;
    if (email == '') {
      this.correoNoIngresado = true;
      this.correoInvalido = false;
      this.validacion = false;
    } else {
      this.correoNoIngresado = false;
      const patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const email_valido = patronCorreo.test(email);
      if (!email_valido) {
        this.correoInvalido = true;
        this.validacion = false;
      } else {
        this.correoInvalido = false;
        this.validacion = true;
        this.usuario.email = email;
      }
    }
  }

  password = '';
  passwordNoCoincide = false;
  passwordNoIngresada = false;

  passwordChange() {
    const contra = this.password;
    if (contra == '') {
      this.passwordNoIngresada = true;
      this.passwordNoCoincide = false;
      this.validacion = false;
    } else {
      this.validacion = true;
      this.usuario.password = contra;
    }
  }

  ngOnInit() {}

  ionViewDidEnter() {
    setTimeout(() => {
      this.animation.play();
    }, 100);
    this.validacion = false;
  }
  ionViewWillEnter() {
    const isLogged = this.restApi.checkUserLogged();
    if (isLogged) {
      this.router.navigate(['/tabs/perfil/']);
    }
    this.email = '';
    this.password = '';
  }

  ionViewWillLeave() {}

  async loginClick() {
    if (this.email == '') {
      this.correoNoIngresado = true;
      this.validacion = false;
    }
    if (this.password == '') {
      this.passwordNoIngresada = true;
      this.validacion = false;
    }
    if (this.validacion) {
      this.restApi.saveLoggedInUser(this.usuario);
      const cargando = await this.loadingController.create({
        message: 'Ingresando',
        cssClass: 'modal-cargando',
        duration: 300,
      });
      // Muestra el Loading Controller
      await cargando.present();
      this.firebaseSvc
        .signIn(this.usuario)
        .then((res) => {
          this.getUsuario(res.user.uid);
          let navigationExtras: NavigationExtras = {
            state: { user: this.email },
          };
          this.router.navigate(['/tabs/perfil/'], navigationExtras);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          cargando.dismiss();
        });
    }
  }

  async getUsuario(uid: string) {
    let path = `users/${uid}`;
    this.firebaseSvc
      .getDocument(path)
      .then((user: Clusuario) => {
        this.utilSvc.saveInLocalStorage('user', user);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(async () => {});
  }
}
