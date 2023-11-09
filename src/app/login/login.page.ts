import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  NavController,
  Animation,
  AnimationController,
  IonCard,
} from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Clusuario } from '../usuario/model/ClUsuario';
import { UsuarioService } from '../usuario/usuario.service';
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



  usuario = new Clusuario();

  validacion = false;

  username = '';
  usernameNoExistente = false;
  usernameNoIngresado = false;

  usernameChange() {
    const usuario = this.username;
    const user_verify = this.restApi.checkUserExists(usuario);
    if (usuario == '') {
      this.usernameNoIngresado = true;
      this.usernameNoExistente = false;
      this.validacion = false;
    } else if (user_verify) {
      this.usernameNoIngresado = false;
      this.usernameNoExistente = false;
      this.validacion = true;
    } else {
      this.usernameNoIngresado = false;
      this.usernameNoExistente = true;
      this.validacion = false;
    }
  }

  password = '';
  passwordNoCoincide = false;
  passwordNoIngresada = false;

  passwordChange() {
    const contra = this.password;
    const usuario = this.restApi.getUser(this.username);
    if (contra == '') {
      this.passwordNoIngresada = true;
      this.passwordNoCoincide = false;
      this.validacion = false;
    } else if (!!usuario) {
      this.passwordNoIngresada = false;
      if (contra == usuario.password) {
        this.passwordNoCoincide = false;
        this.validacion = true;
        this.usuario = usuario;
      } else {
        this.passwordNoCoincide = true;
        this.validacion = false;
      }
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
    this.username = '';
    this.password = '';
  }

  ionViewWillLeave() {

  }

  loginClick() {
    if (this.username == '') {
      this.usernameNoIngresado = true;
      this.validacion = false;
    }
    if (this.password == '') {
      this.passwordNoIngresada = true;
      this.validacion = false;
    }
    if (this.validacion) {
      console.log('xd');
      this.restApi.saveLoggedInUser(this.usuario);
      let navigationExtras: NavigationExtras = {
        state: { user: this.username },
      };
      this.router.navigate(['/tabs/perfil/'], navigationExtras);
    }
  }
}
