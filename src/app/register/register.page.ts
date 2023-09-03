import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private navCtrl: NavController 
  ){} 

  user: any = {
    nombres: '',
    apellidos: '',
    fec_nac: '',
    edad: '',
    sexo: '',
    dep_fav: '',
    tel: '',
    email: '',
    username: '',
    password: ''
  }

  calcularEdad() {
    if (this.user.fec_nac) {
      const hoy = new Date();
      const fechaNacimiento = new Date(this.user.fec_nac);
      const edadMilisegundos = hoy.getTime() - fechaNacimiento.getTime();
      this.user.edad = Math.floor(edadMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
    } else {
      this.user.edad = null;
    }
  }
  regex = /\d/; // Expresión regular que verifica la presencia de números
  pass_confirmation: string  = ''
  validacion: boolean = false;
  NombreIngresado: boolean = false;
  NombreValido: boolean = false;
  nombresInput(){
    const nombres = this.user.nombres;
    if(nombres == ''){
      this.NombreIngresado = true;
    }else{this.NombreIngresado = false;}

    if(this.regex.test(nombres)){
      this.NombreValido = true;
    }else{this.NombreValido = false;}
  }
  ApellidoIngresado: boolean = false;
  ApellidoValido: boolean = false;
  apellidosInput(){
    const apellidos = this.user.apellidos;
    if(apellidos == ''){
      this.ApellidoIngresado = true;
    }else{this.ApellidoIngresado = false;}

    if(this.regex.test(apellidos)){
      this.ApellidoValido = true;
    }else{this.ApellidoValido = false;}
  }
  FechaIngresada: boolean = false;
  FechaValida: boolean = false;
  FechaNacInput(){
    this.calcularEdad();
    const fec_nac = this.user.fec_nac;
    if(fec_nac == ''){
      this.FechaIngresada = true;
    }else{this.FechaIngresada = false;}

    if(this.user.edad < 3){
      this.FechaValida = true;
    }else{this.FechaValida = false;}
  }
  SexoIngresado: boolean = false;
  DeporteIngresado: boolean = false;
  TelefonoIngresado: boolean = false;
  TelefonoValido: boolean = false;
  TelefonoInput(){
    const telefono = this.user.tel ?? '';
    const tel_string = telefono.toString();
    if(telefono == ''){
      this.TelefonoIngresado = true;
      this.TelefonoValido = false;
    }else{
      this.TelefonoIngresado = false;
      const patron = /^9/; // Expresión regular para verificar si comienza con +569
      const tel_valido = patron.test(telefono);
      if(!tel_valido || tel_string.length != 9){
        this.TelefonoValido = true;
      }else{this.TelefonoValido = false;}
    }
  }
  EmailIngresado: boolean = false;
  EmailValido: boolean = false;
  EmailInput(){
    const email = this.user.email;
    if(email == ''){
      this.EmailIngresado = true;
      this.EmailValido = false;
    }else{
      this.EmailIngresado = false;
      const patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const email_valido = patronCorreo.test(email);
      if(!email_valido){
        this.EmailValido = true;
      }else{this.EmailValido = false;}
    }
  }
  UsuarioIngresado: boolean = false;
  UsuarioExistente: boolean = false;
  UsuarioInput(){
    const usuario = this.user.username;
    if(usuario == ''){
      this.UsuarioIngresado = true;
    }else{
      this.UsuarioIngresado = false;
    }
  }
  ContraseniaIngresada: boolean = false;
  ContraseniaValida: boolean = false;
  ContraInput(){
    const contra = this.user.password;
    if(contra == ''){
      this.ContraseniaIngresada = true;
      this.ContraseniaValida = false;
    }else{
      this.ContraseniaIngresada = false;
      // Expresión regular que verifica si la contraseña cumple con los requisitos
      const patronPassword = /^(?=.*\d{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/;
      /* ?=.*\d{4}): Debe contener al menos 4 números.
      (?=.*[a-zA-Z]{3}): Debe contener al menos 3 caracteres (letras minúsculas o mayúsculas).
      (?=.*[A-Z]): Debe contener al menos 1 letra mayúscula.
      .{8,}: Debe tener una longitud mínima de 8 caracteres en total. */
      const contra_valida = patronPassword.test(contra);
      if(!contra_valida){
        this.ContraseniaValida = true;
      }else{this.ContraseniaValida = false;}
    }
  }
  ConfContraseniaIngresada: boolean = false;
  ConfContraseniaValida: boolean = false;
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.user);
    console.log(this.pass_confirmation);
    
    
  }
  
  onWillDismiss() {
    this.navCtrl.navigateForward('login');
  }
  
}
