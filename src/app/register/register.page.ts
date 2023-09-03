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
    ) { }

  user: any = {
    nombres: '',
    apellidos: '',
    fec_nac: '',
    sexo: '',
    dep_fav: '',
    tel: '',
    email: '',
    username: '',
    password: ''
  }
  pass_confirmation: string  = ''

  NombreIngresado: boolean = false;
  NombreValido: boolean = false;
  ApellidoIngresado: boolean = false;
  ApellidoValido: boolean = false;
  FechaIngresada: boolean = false;
  FechaValida: boolean = false;
  SexoIngresado: boolean = false;
  DeporteIngresado: boolean = false;
  TelefonoIngresado: boolean = false;
  TelefonoValido: boolean = false;
  EmailIngresado: boolean = false;
  EmailValido: boolean = false;
  UsuarioIngresado: boolean = false;
  UsuarioExistente: boolean = false;
  ContraseniaIngresada: boolean = false;
  ContraseniaValida: boolean = false;
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
