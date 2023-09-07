import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController, Animation, AnimationController, IonCard } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
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
    private router: Router

  ){
    this.animation = this.animationCtrl.create();
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(200)
      .iterations(1)
      .keyframes([
        { offset: 0, height: '0%' },
        { offset: 0.99, height: '275px' },
        { offset: 1, height: 'auto' },
      ]);
  }
  user: any= {
    username: '',
    password: ''
  }
  
  usersString = localStorage.getItem('users');
  users = this.usersString ? JSON.parse(this.usersString) : [];
  validacion: boolean = false;
  user_login: any = null;

// Bucle para buscar el usuario
BuscarUsuario(Usuario: string): any {
  for (const key in this.users) {
    if (this.users.hasOwnProperty(key)) {
      const user = this.users[key];
      if (user.username === Usuario) {
        return user;
      }
    }
  }
  return null; // Si no se encuentra el usuario
}

  UsuarioNoIngresado: boolean = false;
  UsuarioNoExiste: boolean = false;
  UsuarioInput(){
    const usuario = this.user.username;
    this.user_login = this.BuscarUsuario(usuario);
    if(usuario == ''){
      this.UsuarioNoIngresado = true;
      this.UsuarioNoExiste = false;
    }else{
      this.UsuarioNoIngresado = false;
      if(this.user_login == null){
        this.UsuarioNoExiste = true;
      }
      else{
        this.UsuarioNoExiste = false;
      }
    }
  }
  ContraseniaNoIngresada: boolean = false;
  ContraseniaInvalida: boolean = false;
  ContraInput(){
    const contra = this.user.password;
    if(contra == ''){
      this.ContraseniaNoIngresada = true;
      this.ContraseniaInvalida = false;
    }else{
      this.ContraseniaNoIngresada = false;
      if(this.user_login.password != this.user.password){
        this.ContraseniaInvalida = true;
        this.validacion = false;
      }else{
        this.ContraseniaInvalida = false;
        this.validacion = true;}
    }
  }

  ngOnInit() { 
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.animation.play();
    }, 100);
    this.validacion = false;
    this.UsuarioNoIngresado = false;
    this.ContraseniaNoIngresada = false;
  }
  ionViewWillLeave() {
    this.formulario.resetForm();
    if (this.animation) {
      this.animation.stop();
    }
  }

  onSubmit(){
    if(!this.user.username){
      this.UsuarioNoIngresado = true;
      this.validacion = false;
    }
    else if(this.UsuarioNoExiste){
      this.validacion = false;
    }
    if(!this.user.password){
      this.ContraseniaNoIngresada = true;
      this.validacion = false;
    }
    else if(this.ContraseniaInvalida){
      this.validacion = false;
    }
    if(this.validacion){
      console.log(this.user_login);
      localStorage.setItem('user_login', JSON.stringify(this.user_login));
      let navigationExtras: NavigationExtras = {state: {user: this.user_login.username}};
      this.router.navigate(['/menu-partidos'],navigationExtras);
    }
      
  }

}
