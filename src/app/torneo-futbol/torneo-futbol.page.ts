import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ClToreno_futbol } from './model/ClTorneo-futbol';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { TorneoFutbolService } from './torneo-futbol.service';
import { IonCheckbox, IonInput, IonCard   } from '@ionic/angular';
@Component({
  selector: 'app-torneo-futbol',
  templateUrl: './torneo-futbol.page.html',
  styleUrls: ['./torneo-futbol.page.scss'],
})
export class TorneoFutbolPage {

  constructor(
    private restApi: TorneoFutbolService,
    private router: Router,
  ) {}

  @ViewChild('nombreImput', { read: IonInput }) nombreImput: any;
  @ViewChild('ligaCard', { read: ElementRef }) ligaCard: any;
  @ViewChild('copaCard', { read: ElementRef }) copaCard: any;

  torneo: ClToreno_futbol = {
    id: 6,
    nombre: '',
    tipo_torneo: '',
    fase_grupos: false,
    cantidad_equipos: 2,
  }

  isCopa = false;
  tipoNoSelected = false;

  ligaImg = '../../assets/icon/leaderboard.svg';
  ligaColorText = 'white';
  copaImg = '../../assets/icon/cup.svg';
  copaColorText = 'white';

  ligaClick(){
    this.ligaImg = '../../assets/icon/leaderboard_selected.svg';
    this.ligaColorText = '#ffd666';
    this.copaImg = '../../assets/icon/cup.svg';
    this.copaColorText = 'white';
    this.torneo.tipo_torneo = 'liga';
    this.isCopa = false;
    this.torneo.fase_grupos = false;
    this.tipoNoSelected = false;
  }

  copaClick(){
    this.ligaImg = '../../assets/icon/leaderboard.svg';
    this.ligaColorText = 'white';
    this.copaImg = '../../assets/icon/cup_selected.svg';
    this.copaColorText = '#ffd666';
    this.torneo.tipo_torneo = 'copa';
    this.isCopa = true;
    this.tipoNoSelected = false;
  }

  alerta_equipos = false;

  masClick(){
    this.torneo.cantidad_equipos = this.torneo.cantidad_equipos + 1;
  }
  menosClick(){
    if(this.torneo.cantidad_equipos != 2){
      this.torneo.cantidad_equipos = this.torneo.cantidad_equipos - 1;
    }
  }

  equiposChange(){
    if(this.torneo.cantidad_equipos < 2 || this.torneo.cantidad_equipos == null){
      this.alerta_equipos = true;
      this.torneo.cantidad_equipos = 2;
      console.log(this.torneo.cantidad_equipos);
    }
    else{
      this.alerta_equipos = false;
    }
  }
  async onClick() {
    try {
      if(this.torneo.nombre == ''){
        this.nombreImput.setFocus();
        throw new Error("Falta Nombre");
      }
      if(this.torneo.tipo_torneo == ''){
        this.tipoNoSelected = true;
        this.ligaCard.nativeElement.style.borderColor = '#ffd666';
        this.ligaCard.nativeElement.style.backgroundColor = '#ffd666';
        this.copaCard.nativeElement.style.borderColor = '#ffd666';
        this.copaCard.nativeElement.style.backgroundColor = '#ffd666';
        await new Promise(resolve => setTimeout(resolve, 150));
        this.ligaCard.nativeElement.style.borderColor = 'var(--ion-color-primary)';
        this.ligaCard.nativeElement.style.backgroundColor = 'var(--ion-color-primary)';
        this.copaCard.nativeElement.style.borderColor = 'var(--ion-color-primary)';
        this.copaCard.nativeElement.style.backgroundColor = 'var(--ion-color-primary)';
        throw new Error("Falta Tipo Torneo");
      }
      const response = await this.restApi.addTorneo(this.torneo).toPromise();
      console.log("Respuesta:", response);
      console.log("¡Registro agregado con éxito!");
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
