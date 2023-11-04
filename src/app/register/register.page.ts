import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  NavController,
  LoadingController,
  Animation,
  AnimationController,
  IonCard,
  IonInput,
} from '@ionic/angular';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { Clusuario } from '../usuario/model/ClUsuario';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from '../services/photo.service';
import { Geolocation } from '@capacitor/geolocation';

const printCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition();

  console.log('Current position:', coordinates);
};
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('miFormulario', { static: false }) formulario: any;
  @ViewChild(IonCard, { read: ElementRef }) card: any;
  @ViewChild('nacionalidadModal') nacionalidadModal: any;
  @ViewChild('deporteModal') deporteModal: any;

  private animation: Animation;

  constructor(
    private navCtrl: NavController,
    private animationCtrl: AnimationController,
    private http: HttpClient,
    public photoService: PhotoService,
    private loadingController: LoadingController,
    private restApi: UsuarioService
  ) {
    this.animation = this.animationCtrl.create();
  }

  ngAfterViewInit() {
    printCurrentPosition();
  }

  usuario = new Clusuario();

  validacion = false;

  getDateFormatted(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Suma 1 porque los meses se indexan desde 0
    const day = date.getDate();
    // Formatea la fecha como "YYYY-MM-DD"
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
    return formattedDate;
  }
  calcularEdad(fec_nac: Date) {
    const hoy = new Date();
    const fechaNacimiento = fec_nac;
    const edadMilisegundos = hoy.getTime() - fechaNacimiento.getTime();
    const edad = Math.floor(edadMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
    return edad;
  }

  imgPerfilSrc? = '../../assets/icon/user-img.svg';

  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
    if (this.photoService.photos.length > 0) {
      this.imgPerfilSrc = this.photoService.photos[0].webviewPath;
    }
  }

  regla = /\d/; // Expresión regular que verifica la presencia de números
  pass_confirmation = '';
  nombresInvalido = false;
  nombresNoIngresados = false;
  nombresInput() {
    const nombres = this.usuario.nombreprod;
    if (this.regla.test(nombres)) {
      this.nombresInvalido = true;
    }
  }
  apellidosInput() {
    const apellidos = this.usuario.dv;
    if (this.regla.test(apellidos)) {
      this.nombresInvalido = true;
    }
  }
  fecha_nac: any;
  date = this.getDateFormatted(new Date());
  edad: any;
  showDatetime = false;
  dateInput = false;
  dateNoIngresada = false;
  dateChange() {
    const date = this.getDateFormatted(new Date(this.fecha_nac));
    this.date = date;
    this.edad = this.calcularEdad(new Date(this.fecha_nac));
    if (this.edad < 5) {
      this.edad = 'Ingrese una edad valida, minimo 5 años';
    } else {
      this.usuario.edad = this.edad;
      this.edad = `${this.edad} años`;
    }
    this.dateInput = true;
  }
  botonDateClick() {
    this.showDatetime = !this.showDatetime;
  }
  datetimeLoseFocus() {
    setTimeout(() => {
      this.showDatetime = false;
    }, 100);
  }
  femaleGenderImgSrc = '../../assets/icon/female.svg';
  femaleGenderTextColor = 'white';
  maleGenderImgSrc = '../../assets/icon/male.svg';
  maleGenderTextColor = 'white';
  otherGenderImgSrc = '../../assets/icon/male-female.svg';
  otherGenderTextColor = 'white';
  femaleGenderClick() {
    this.femaleGenderImgSrc = '../../assets/icon/female-selected.svg';
    this.femaleGenderTextColor = 'var(--ion-color-secondary)';
    this.maleGenderImgSrc = '../../assets/icon/male.svg';
    this.maleGenderTextColor = 'white';
    this.otherGenderImgSrc = '../../assets/icon/male-female.svg';
    this.otherGenderTextColor = 'white';
    this.usuario.raza = 'female';
  }
  maleGenderClick() {
    this.maleGenderImgSrc = '../../assets/icon/male-selected.svg';
    this.maleGenderTextColor = 'var(--ion-color-secondary)';
    this.femaleGenderImgSrc = '../../assets/icon/female.svg';
    this.femaleGenderTextColor = 'white';
    this.otherGenderImgSrc = '../../assets/icon/male-female.svg';
    this.otherGenderTextColor = 'white';
    this.usuario.raza = 'male';
  }
  otroGenderClick() {
    this.otherGenderImgSrc = '../../assets/icon/male-female-selected.svg';
    this.otherGenderTextColor = 'var(--ion-color-secondary)';
    this.femaleGenderImgSrc = '../../assets/icon/female.svg';
    this.femaleGenderTextColor = 'white';
    this.maleGenderImgSrc = '../../assets/icon/male.svg';
    this.maleGenderTextColor = 'white';
    this.usuario.raza = 'other';
  }

  banderas: any;
  banderasFiltradas: any;

  ngOnInit() {
    this.usuario.rut = 'cl';
    this.usuario.editorial = 'Fútbol'
    this.http.get('https://flagcdn.com/es/codes.json').subscribe((res: any) => {
      this.banderas = res;
      this.banderasFiltradas = res;
    });
  }

  // Esta función se ejecutará cuando cambie el valor en el campo de búsqueda
  busquedaInput(event: any) {
    const busqueda = event.target.value.toLowerCase();
    this.banderasFiltradas = Object.keys(this.banderas)
      .filter((key) =>
        this.banderas[key].toLowerCase().includes(busqueda.toLowerCase())
      )
      .reduce((obj: any, key) => {
        obj[key] = this.banderas[key];
        return obj;
      }, {});
  }

  nacionalidad_src = 'https://flagcdn.com/256x192/cl.png';
  nacionalidad_alt = 'Chile';

  banderaClick(key: any, value: any) {
    this.usuario.rut = key;
    this.nacionalidad_src = `https://flagcdn.com/256x192/${key}.png`;
    this.nacionalidad_alt = value;
    this.nacionalidadModal.dismiss();
  }

  deporte_src = '../../assets/icon/soccer_ball.png';
  deporte_alt = 'Fútbol';

  futbolClick() {
    this.deporte_src = '../../assets/icon/soccer_ball.png';
    this.deporte_alt, this.usuario.editorial = 'Fútbol';
    this.deporteModal.dismiss();
  }

  basquetClick() {
    this.deporte_src = '../../assets/icon/basquetball.png';
    this.deporte_alt, this.usuario.editorial = 'Básquetbol';
    this.deporteModal.dismiss();
  }

  padelClick() {
    this.deporte_src = '../../assets/icon/padel_raquet.png';
    this.deporte_alt, this.usuario.editorial = 'Pádel';
    this.deporteModal.dismiss();
  }

  tenisClick() {
    this.deporte_src = '../../assets/icon/tenis_raquet.png';
    this.deporte_alt, this.usuario.editorial = 'Tenis';
    this.deporteModal.dismiss();
  }

  telefono = '';
  telefonoInvalido = false;
  telefonoNoIngresado = false;
  telefonoChange() {
    const patron = /^\+569/; // Expresión regular para verificar si comienza con +569
    const tel = this.telefono;
    if (tel == '') {
      this.telefonoNoIngresado = true;
      this.telefonoInvalido = false;
    } else {
      this.telefonoNoIngresado = false;
      if (patron.test(this.telefono)) {
        this.telefono = this.telefono.substring(3);
      } else {
        if (this.telefono[0] == '9') {
          this.telefono = this.telefono;
        } else {
          this.telefono = '9' + this.telefono;
        }
      }
      if (this.telefono.length != 9) {
        this.telefonoInvalido = true;
      } else {
        this.usuario.cantidad = +this.telefono;
        if (Number.isNaN(this.usuario.cantidad)) {
          this.usuario.cantidad = 0;
          this.telefonoInvalido = true;
        } else {
          this.telefonoInvalido = false;
        }
      }
    }
  }
  correoInvalido = false;
  correoNoIngresado = false;

  correoChange() {
    const email = this.usuario.direccion;
    if (email == '') {
      this.correoNoIngresado = true;
      this.correoInvalido = false;
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
      }
    }
  }

  usernameInvalido = false;
  usernameNoIngresado = false;

  usernameChange() {
    if (this.usuario.hrini == '') {
      this.usernameNoIngresado = true;
    } else {
      this.usernameNoIngresado = false;
    }
  }

  passwordInvalida = false;
  passwordNoIngresada = false;
  password4Num = false;
  password3Car = false;
  passwordMayus = false;
  passowrd8Length = false;
  passwordInput() {
    const contra = this.usuario.hrfin;
    if (contra == '') {
      this.passwordNoIngresada = true;
      this.passwordInvalida = false;
    } else {
      this.passwordNoIngresada = false;
      // Expresión regular que verifica si la contraseña cumple con los requisitos
      const patronPassword = /^(?=.*\d{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/;
      const patron4Num = /\d{4}/;
      const patron3Car = /[a-zA-Z]{3}/;
      const patronMayus = /[A-Z]/;
      const patron8Length = /^.{8,}$/;
      /* ?=.*\d{4}): Debe contener al menos 4 números.
      (?=.*[a-zA-Z]{3}): Debe contener al menos 3 caracteres (letras minúsculas o mayúsculas).
      (?=.*[A-Z]): Debe contener al menos 1 letra mayúscula.
      .{8,}: Debe tener una longitud mínima de 8 caracteres en total. */
      this.password4Num = !patron4Num.test(contra);
      this.password3Car = !patron3Car.test(contra);
      this.passwordMayus = !patronMayus.test(contra);
      this.passowrd8Length = !patron8Length.test(contra);
      const contra_valida = patronPassword.test(contra);
      if (!contra_valida) {
        this.passwordInvalida = true;
        this.validacion = false;
      } else {
        this.passwordInvalida = false;
        this.validacion = true;
      }
    }
  }

  password = '';
  confPasswordNoIngresada = false;
  passwordNoCoincide = false;

  confPasswordChange() {
    const confPass = this.password;
    const password = this.usuario.hrfin;
    if (confPass == '') {
      this.confPasswordNoIngresada = true;
      this.passwordNoCoincide = false;
    } else {
      this.confPasswordNoIngresada = false;
      if (confPass != password) {
        this.passwordNoCoincide = true;
        this.validacion = false;
      } else {
        this.passwordNoCoincide = false;
        this.validacion = true;
      }
    }
  }

  ionViewDidEnter() {
    this.validacion = false;
  }
  @ViewChild('modal') modal: any;
  onSubmit() {
    if (this.validacion) {
      this.modal.present();
    }
  }

  onWillDismiss() {
    this.navCtrl.navigateForward('login');
  }

  async registrarClick() {
    if (this.usuario.nombreprod == '' || this.usuario.dv == '') {
      this.nombresNoIngresados = true;
    } else if (
      this.dateInput == false ||
      this.edad == 'Ingrese una edad valida, minimo 5 años'
    ) {
      this.dateNoIngresada = true;
    } else if (this.usuario.raza == '') {
      this.femaleGenderImgSrc = '../../assets/icon/female-selected.svg';
      this.femaleGenderTextColor = 'var(--ion-color-secondary)';
      this.maleGenderImgSrc = '../../assets/icon/male-selected.svg';
      this.maleGenderTextColor = 'var(--ion-color-secondary)';
      this.otherGenderImgSrc = '../../assets/icon/male-female-selected.svg';
      this.otherGenderTextColor = 'var(--ion-color-secondary)';
      await new Promise((resolve) => setTimeout(resolve, 150));
      this.femaleGenderImgSrc = '../../assets/icon/female.svg';
      this.femaleGenderTextColor = 'white';
      this.maleGenderImgSrc = '../../assets/icon/male.svg';
      this.maleGenderTextColor = 'white';
      this.otherGenderImgSrc = '../../assets/icon/male-female.svg';
      this.otherGenderTextColor = 'white';
    }
    else if(this.usuario.cantidad == null){
      
    } else {
      const cargando = await this.loadingController.create({
        message: 'Registrando',
        cssClass: 'modal-cargando',
      });
      // Muestra el Loading Controller
      await cargando.present();
      await this.restApi.addUsuario(this.usuario).subscribe({
        next: (res) => {
          console.log('Creando torneo', res);
          cargando.dismiss(); //Elimina la espera
          this.navCtrl.navigateForward('menu-partidos');
        },
        complete: () => {},
        error: (err) => {
          console.log('Error Crenado Torneo', err);
          cargando.dismiss(); //Elimina la espera
        },
      });
      console.log('¡Registro agregado con éxito!');
    }
  }
}
