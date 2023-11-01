import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ClToreno_futbol } from './model/ClTorneo-futbol';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { TorneoFutbolService } from './torneo-futbol.service';
import { IonCheckbox, IonInput, IonCard } from '@ionic/angular';
@Component({
  selector: 'app-torneo-futbol',
  templateUrl: './torneo-futbol.page.html',
  styleUrls: ['./torneo-futbol.page.scss'],
})
export class TorneoFutbolPage {


  torneo = new ClToreno_futbol();

  @ViewChild('nombreImput', { read: IonInput }) nombreImput: any;
  @ViewChild('ligaCard', { read: ElementRef }) ligaCard: any;
  @ViewChild('copaCard', { read: ElementRef }) copaCard: any;

  constructor(private restApi: TorneoFutbolService, private router: Router) {
    this.torneo.nombreprod = "";
    this.torneo.cantidad = 0;
  }

  
  
  isCopa = false;
  tipoNoSelected = false;

  ligaImg = '../../assets/icon/leaderboard.svg';
  ligaColorText = 'white';
  copaImg = '../../assets/icon/cup.svg';
  copaColorText = 'white';

  ligaClick() {
    this.ligaImg = '../../assets/icon/leaderboard_selected.svg';
    this.ligaColorText = '#ffd666';
    this.copaImg = '../../assets/icon/cup.svg';
    this.copaColorText = 'white';
    this.torneo.categoria = 'liga';
    this.isCopa = false;
    this.torneo.precio = 0;
    this.tipoNoSelected = false;
  }

  copaClick() {
    this.ligaImg = '../../assets/icon/leaderboard.svg';
    this.ligaColorText = 'white';
    this.copaImg = '../../assets/icon/cup_selected.svg';
    this.copaColorText = '#ffd666';
    this.torneo.categoria = 'copa';
    this.isCopa = true;
    this.tipoNoSelected = false;
  }

  faseGruposChange(event : any){
    const faseGrupos = event.target.checked;
    if(faseGrupos){
      this.torneo.precio = 1
    }
    else{
      this.torneo.precio = 0;
    }
  }

  alerta_equipos = false;

  masClick() {
    this.torneo.cantidad = this.torneo.cantidad! + 1;
  }
  menosClick() {
    if (this.torneo.cantidad != 2) {
      this.torneo.cantidad = this.torneo.cantidad! - 1;
    }
  }

  equiposChange() {
    if (
      this.torneo.cantidad! < 2 ||
      this.torneo.cantidad! == null
    ) {
      this.alerta_equipos = true;
      this.torneo.cantidad! = 2;
      console.log(this.torneo.cantidad!);
    } else {
      this.alerta_equipos = false;
    }
  }
  async onClick() {
    if (this.torneo.nombreprod == '') {
      await this.nombreImput.setFocus();
    }
    if (this.torneo.categoria == "x") {
      this.tipoNoSelected = true;
      this.ligaCard.nativeElement.style.borderColor = '#ffd666';
      this.ligaCard.nativeElement.style.backgroundColor = '#ffd666';
      this.copaCard.nativeElement.style.borderColor = '#ffd666';
      this.copaCard.nativeElement.style.backgroundColor = '#ffd666';
      await new Promise((resolve) => setTimeout(resolve, 150));
      this.ligaCard.nativeElement.style.borderColor =
        'var(--ion-color-primary)';
      this.ligaCard.nativeElement.style.backgroundColor =
        'var(--ion-color-primary)';
      this.copaCard.nativeElement.style.borderColor =
        'var(--ion-color-primary)';
      this.copaCard.nativeElement.style.backgroundColor =
        'var(--ion-color-primary)';
    }
    const response = await this.restApi.addTorneo(this.torneo).toPromise();
    console.log('Respuesta:', response);
    console.log('¡Registro agregado con éxito!');
  }
}
