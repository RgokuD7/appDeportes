import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController, Animation, AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

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
      .duration(1500)
      .iterations(1)
      .keyframes([
        { offset: 0, height: '0%' },
        { offset: 0.99, height: '200px' },
        { offset: 1, height: 'auto' },
      ]);
  }

  ngOnInit() {
  }

  email: string = '';
  validacion: boolean = false;
  EmailNoIngresado: boolean = false;
  EmailInvalido: boolean = false;
  EmailInput(){
    const email = this.email;
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

  onWillDismiss(){
    this.navCtrl.navigateForward('login');
  }

  @ViewChild('modal') modal: any;
  onSubmit(){
    if(!this.email){
      this.EmailNoIngresado = true;
      this.validacion = false;
    }
    else if(this.EmailInvalido){
      this.validacion = false;
    }
    if(this.validacion){
      this.modal.present();
    }
      
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.animation.play();
    }, 100);
  }
  ionViewWillLeave() {
    this.formulario.resetForm();
    if (this.animation) {
      this.animation.stop();
    }
    this.EmailNoIngresado = false;
  }

}
