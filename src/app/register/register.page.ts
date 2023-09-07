import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController, Animation, AnimationController, IonCard } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('miFormulario', { static: false }) formulario: any;
  @ViewChild(IonCard, { read: ElementRef }) card: any;

  private animation: Animation;

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ){
    this.animation = this.animationCtrl.create();
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(300)
      .iterations(1)
      .keyframes([
        { offset: 0, height: '0%' },
        { offset: 0.99, height: '700px' },
        { offset: 1, height: 'auto' },
      ]);
  }

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

  usersString = localStorage.getItem('users');
  users = this.usersString ? JSON.parse(this.usersString) : [];
  
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
  NombreNoIngresado: boolean = false;
  NombreInvalido: boolean = false;
  nombresInput(){
    const nombres = this.user.nombres;
    if(nombres == ''){
      this.NombreNoIngresado = true;
    }else{
      this.NombreNoIngresado = false;
      if(this.regex.test(nombres)){
        this.NombreInvalido = true;
        this.validacion = false;
      }else{
        this.NombreInvalido = false;
        this.validacion = true;
      }
    }
  }
  ApellidoNoIngresado: boolean = false;
  ApellidoInvalido: boolean = false;
  apellidosInput(){
    const apellidos = this.user.apellidos;
    if(apellidos == ''){
      this.ApellidoNoIngresado = true;
    }else{
      this.ApellidoNoIngresado = false;
      if(this.regex.test(apellidos)){
        this.ApellidoInvalido = true;
        this.validacion = false;
      }else{
        this.ApellidoInvalido = false;
        this.validacion = true;}
    }
  }
  FechaNoIngresada: boolean = false;
  FechaIngresada: boolean = false;
  FechaInvalida: boolean = false;
  FechaNacInput(){
    this.calcularEdad();
    const fec_nac = this.user.fec_nac;
    if(fec_nac == ''){
      this.FechaNoIngresada = true;
    }else{this.FechaNoIngresada = false;}

    if(this.user.edad < 5){
      this.FechaInvalida = true;
      this.validacion = false;
    }else{
      this.FechaInvalida = false;
      this.validacion = true;
      this.FechaIngresada = true;
    }
  }
  SexoNoIngresado: boolean = false;
  SexoChange(){
    const sexo = this.user.sexo;
    if(sexo == ''){
      this.SexoNoIngresado = true;
      this.validacion = false;
    }else{
      this.SexoNoIngresado = false;
      this.validacion = true;
    }
  }
  DeporteNoIngresado: boolean = false;
  DeporteChange(){
    const deporte = this.user.dep_fav;
    if(deporte == ''){
      this.DeporteNoIngresado = true;
      this.validacion = false;
    }else{
      this.DeporteNoIngresado = false;
      this.validacion = true;
    }
  }
  TelefonoNoIngresado: boolean = false;
  TelefonoInvalido: boolean = false;
  TelefonoInput(){
    const telefono = this.user.tel ?? '';
    const tel_string = telefono.toString();
    if(telefono == ''){
      this.TelefonoNoIngresado = true;
      this.TelefonoInvalido = false;
    }else{
      this.TelefonoNoIngresado = false;
      const patron = /^9/; // Expresión regular para verificar si comienza con +569
      const tel_valido = patron.test(telefono);
      if(!tel_valido || tel_string.length != 9){
        this.TelefonoInvalido = true;
        this.validacion = false;
      }else{
        this.TelefonoInvalido = false;
        this.validacion = true;
      }
    }
  }
  EmailNoIngresado: boolean = false;
  EmailInvalido: boolean = false;
  EmailInput(){
    const email = this.user.email;
    if(email == ''){
      this.EmailNoIngresado = true;
      this.EmailInvalido = false;
    }else{
      this.EmailNoIngresado = false;
      const patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const email_valido = patronCorreo.test(email);
      if(!email_valido){
        this.EmailInvalido = true;
        this.validacion = false;
      }else{
        this.EmailInvalido = false;
        this.validacion = true;}
    }
  }
  UsuarioNoIngresado: boolean = false;
  UsuarioExistente: boolean = false;
  UsuarioInput(){
    const usuario = this.user.username;
    if(usuario == ''){
      this.UsuarioNoIngresado = true;
    }else{
      this.UsuarioNoIngresado = false;
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
      // Expresión regular que verifica si la contraseña cumple con los requisitos
      const patronPassword = /^(?=.*\d{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/;
      /* ?=.*\d{4}): Debe contener al menos 4 números.
      (?=.*[a-zA-Z]{3}): Debe contener al menos 3 caracteres (letras minúsculas o mayúsculas).
      (?=.*[A-Z]): Debe contener al menos 1 letra mayúscula.
      .{8,}: Debe tener una longitud mínima de 8 caracteres en total. */
      const contra_valida = patronPassword.test(contra);
      if(!contra_valida){
        this.ContraseniaInvalida = true;
        this.validacion = false;
      }else{
        this.ContraseniaInvalida = false;
        this.validacion = true;}
    }
  }
  ConfContraseniaNoIngresada: boolean = false;
  ConfContraseniaInvalida: boolean = false;
  ConfContraInput(){
    const ConfContra = this.pass_confirmation;
    const contra = this.user.password;
    if(ConfContra == ''){
      this.ConfContraseniaNoIngresada = true;
      this.ConfContraseniaInvalida = false;
    }else{
      this.ConfContraseniaNoIngresada = false;
      if(ConfContra != contra){
        this.ConfContraseniaInvalida = true;
        this.validacion = false;
      }else{
        this.ConfContraseniaInvalida = false;
        this.validacion = true;
      }
    }
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.animation.play();
    }, 100);
    this.validacion = false;
    this.NombreNoIngresado = false;
    this.ApellidoNoIngresado = false;
    this.FechaNoIngresada = false;
    this.SexoNoIngresado = false;
    this.DeporteNoIngresado = false;  
    this.TelefonoNoIngresado = false;
    this.EmailNoIngresado = false;
    this.UsuarioNoIngresado = false;
    this.ContraseniaNoIngresada = false;
    this.ConfContraseniaNoIngresada = false;
  }
  ionViewWillLeave() {
    this.formulario.resetForm();
    if (this.animation) {
      this.animation.stop();
    }
  }
  ngOnInit(){}
  @ViewChild('modal') modal: any;
  onSubmit(){
    if(!this.user.nombres){
      this.NombreNoIngresado = true;
      this.validacion = false;
    }
    else if(this.NombreInvalido){
      this.validacion = false;
    }
    if(!this.user.apellidos){
      this.ApellidoNoIngresado = true;
      this.validacion = false;
    }
    else if(this.ApellidoInvalido){
      this.validacion = false;
    }
    if(!this.user.fec_nac){
      this.FechaNoIngresada = true;
      this.validacion = false;
    }
    else if(this.FechaInvalida){
      this.validacion = false;
    }
    if(!this.user.sexo){
      this.SexoNoIngresado = true;
      this.validacion = false;
    }
    if(!this.user.dep_fav){
      this.DeporteNoIngresado = true;
      this.validacion = false;
    }
    if(!this.user.tel){
      this.TelefonoNoIngresado = true;
      this.validacion = false;
    }
    else if(this.TelefonoInvalido){
      this.validacion = false;
    }
    if(!this.user.email){
      this.EmailNoIngresado = true;
      this.validacion = false;
    }
    else if(this.EmailInvalido){
      this.validacion = false;
    }
    if(!this.user.username){
      this.UsuarioNoIngresado = true;
      this.validacion = false;
    }
    else if(this.UsuarioExistente){
      this.validacion = false;
    }
    if(!this.user.password){
      this.ContraseniaNoIngresada = true;
      this.validacion = false;
    }
    else if(this.ContraseniaInvalida){
      this.validacion = false;
    }
    if(!this.pass_confirmation){
      this.ConfContraseniaNoIngresada = true;
      this.validacion = false;
    }
    else if(this.ConfContraseniaInvalida){
      this.validacion = false;
    }
    if(this.validacion){
      this.modal.present();
      this.users.push(this.user);
      console.log(this.users);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
      
  }
  
  onWillDismiss() {
    this.navCtrl.navigateForward('login');
  }
  
}
