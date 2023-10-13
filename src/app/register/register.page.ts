import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController, Animation, AnimationController, IonCard, IonInput } from '@ionic/angular';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { Clusuario } from '../usuario/model/ClUsuario';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('miFormulario', { static: false }) formulario: any;
  @ViewChild(IonCard, { read: ElementRef }) card: any;
  @ViewChild('nacionalidadModal') nacionalidadModal: any;

  private animation: Animation;

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private http: HttpClient,
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

  usuario: Clusuario = {
    id: 0,
    nombres: "",
    apellidos: "",
    fecha_nac: "",
    edad: 0,
    genero:  "",
    nacionalidad: "",
    deporte_fav: "",
    telefono: 0,
    email:  "",
    username: "",
    password: ""
  }
  

  getDteFormatted(date: Date){
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Suma 1 porque los meses se indexan desde 0
    const day = date.getDate();
    // Formatea la fecha como "YYYY-MM-DD"
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return formattedDate;
  }
  calcularEdad(fec_nac: Date) {
    const hoy = new Date();
    const fechaNacimiento = fec_nac;
    const edadMilisegundos = hoy.getTime() - fechaNacimiento.getTime();
    const edad = Math.floor(edadMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
    return edad;
  }
  
  regla = /\d/; // Expresión regular que verifica la presencia de números
  pass_confirmation: string  = ''
  validacion: boolean = false;
  NombresInvalido = false;
  nombresInput(){
    const nombres = this.usuario.nombres;
    if(this.regla.test(nombres)){
      this.NombresInvalido = true;
    }
  }
  apellidosInput(){
    const apellidos = this.usuario.apellidos;
    if(this.regla.test(apellidos)){
      this.NombresInvalido = true;
    }
  }
  fecha_nac : any;
  date = this.getDteFormatted(new Date);
  edad: any;
  showDatetime = false;
  dateInput = false;
  dateChange(){
    const date = this.getDteFormatted(new Date(this.fecha_nac));
    this.date = date;
    this.edad = this.calcularEdad(new Date(this.fecha_nac));
    if(this.edad < 5){
      this.edad = 'Ingrese una edad valida, minimo 5 años'
    }
    else{
      this.edad = `${this.edad} años`
    }
    this.dateInput = true;
  }
  botonDateClick(){
    this.showDatetime = !this.showDatetime;
  }
  datetimeLoseFocus(){
    setTimeout(() => {
        this.showDatetime = false;
    }, 100);
  }
  femaleGenderColor = 'white';
  maleGenderColor = 'white';
  otherGenderColor = 'white';
  femaleGenderClick(){
    this.femaleGenderColor = 'var(--ion-color-secondary)';
    this.maleGenderColor = 'white';
    this.otherGenderColor = 'white';
    this.usuario.genero = 'female';
  }
  maleGenderClick(){
    this.maleGenderColor = 'var(--ion-color-secondary)';
    this.femaleGenderColor = 'white';
    this.otherGenderColor = 'white';
    this.usuario.genero = 'male';
  }
  otroGenderClick(){
    this.otherGenderColor = 'var(--ion-color-secondary)';
    this.femaleGenderColor = 'white';
    this.maleGenderColor = 'white';
    this.usuario.genero = 'other';
  }

  banderas: any;
  banderasFiltradas: any;

  ngOnInit() {
    this.http.get('https://flagcdn.com/es/codes.json').subscribe((res: any) => {
      this.banderas = res;
      this.banderasFiltradas = res;
    });
  }

   // Esta función se ejecutará cuando cambie el valor en el campo de búsqueda
   busquedaInput(event: any){
    const busqueda = event.target.value.toLowerCase();
    this.banderasFiltradas = Object.keys(this.banderas)
      .filter((key) => this.banderas[key].toLowerCase().includes(busqueda.toLowerCase()))
      .reduce((obj: any, key) => {
        obj[key] = this.banderas[key];
        return obj;
      }, {});
  }

  nacionalidad_src = 'https://flagcdn.com/256x192/cl.png'
  nacionalidad_alt = 'Chile'

  banderaClick(key: any, value: any){
    this.usuario.nacionalidad = key;
    this.nacionalidad_src = `https://flagcdn.com/256x192/${key}.png`;
    this.nacionalidad_alt = value;
    this.nacionalidadModal.dismiss();
  }

  deporte_src = '../../assets/icon/soccer_ball.png';
  deporte_alt = 'Fútbol';

  futbolClick(){
    
  }






  DeporteNoIngresado: boolean = false;
  DeporteChange(){
    const deporte = this.usuario.deporte_fav;
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
    const tel = this.usuario.telefono;
    const tel_string = tel.toString();
    if(tel == 0){
      this.TelefonoNoIngresado = true;
      this.TelefonoInvalido = false;
    }else{
      this.TelefonoNoIngresado = false;
      const patron = /^9/; // Expresión regular para verificar si comienza con +569
      const tel_valido = patron.test(tel_string);
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
    const email = this.usuario.email;
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
    const usuario = this.usuario.username;
    if(usuario == ''){
      this.UsuarioNoIngresado = true;
    }else{
      this.UsuarioNoIngresado = false;
    }
  }
  ContraseniaNoIngresada: boolean = false;
  ContraseniaInvalida: boolean = false;
  ContraInput(){
    const contra = this.usuario.password;
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
    const contra = this.usuario.password;
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

    this.validacion = false;
    this.DeporteNoIngresado = false;  
    this.TelefonoNoIngresado = false;
    this.EmailNoIngresado = false;
    this.UsuarioNoIngresado = false;
    this.ContraseniaNoIngresada = false;
    this.ConfContraseniaNoIngresada = false;
  }
  @ViewChild('modal') modal: any;
  onSubmit(){
    if(!this.usuario.genero){
      this.validacion = false;
    }
    if(!this.usuario.deporte_fav){
      this.DeporteNoIngresado = true;
      this.validacion = false;
    }
    if(!this.usuario.telefono){
      this.TelefonoNoIngresado = true;
      this.validacion = false;
    }
    else if(this.TelefonoInvalido){
      this.validacion = false;
    }
    if(!this.usuario.email){
      this.EmailNoIngresado = true;
      this.validacion = false;
    }
    else if(this.EmailInvalido){
      this.validacion = false;
    }
    if(!this.usuario.username){
      this.UsuarioNoIngresado = true;
      this.validacion = false;
    }
    else if(this.UsuarioExistente){
      this.validacion = false;
    }
    if(!this.usuario.password){
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
    }
      
  }
  
  onWillDismiss() {
    this.navCtrl.navigateForward('login');
  }
  
}
