import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TorneoFutbolService } from '../torneo-futbol.service';
import { ClToreno_futbol } from '../model/ClTorneo-futbol';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonCheckbox,
  IonInput,
  IonCard,
  LoadingController,
  NavController,
} from '@ionic/angular';
@Component({
  selector: 'app-editar-torneo',
  templateUrl: './editar-torneo.page.html',
  styleUrls: ['./editar-torneo.page.scss'],
})
export class EditarTorneoPage{
  constructor(
    public loadingController: LoadingController,
    private restApi: TorneoFutbolService,
    public router: Router,
    public actRoute: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  torneo = new ClToreno_futbol();

  ionViewDidEnter() {
    this.getTorneo(this.actRoute.snapshot.params['id']);
  }

  async getTorneo(id: number) {
    // Crea Wait
    const cargando = await this.loadingController.create({
      message: 'Loading...',
    });
    // Muestra Wait
    await cargando.present();
    // Obtiene el Observable
    await this.restApi.getTorneo(id).subscribe({
      next: (torneo) => {
        this.torneo = torneo;
        if (torneo.categoria == 'liga') {
          this.ligaImg = '../../assets/icon/leaderboard_selected.svg';
          this.ligaColorText = '#ffd666';
          this.copaImg = '../../assets/icon/cup.svg';
          this.copaColorText = 'white';
          this.isCopa = false;
        } else if (torneo.categoria == 'copa') {
          this.ligaImg = '../../assets/icon/leaderboard.svg';
          this.ligaColorText = 'white';
          this.copaImg = '../../assets/icon/cup_selected.svg';
          this.copaColorText = '#ffd666';
          this.torneo.categoria = 'copa';
          this.isCopa = true;
          if (torneo.precio == 0) {
            this.faseGrupos = false;
          } else if (torneo.precio == 1) {
            this.faseGrupos = true;
          }
        }
        cargando.dismiss();
      },
      complete: () => {},
      error: (err) => {
        console.log('getProductID Errr****+');
        console.log(err);
        cargando.dismiss();
      },
    });
  }

  @ViewChild('nombreInput', { read: IonInput }) nombreInput: any;

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

  faseGrupos = false;

  faseGruposChange(event: any) {
    const faseGrupos = event.target.checked;
    if (faseGrupos) {
      this.torneo.precio = 1;
    } else {
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
    if (this.torneo.cantidad! < 2 || this.torneo.cantidad! == null) {
      this.alerta_equipos = true;
      this.torneo.cantidad! = 2;
      console.log(this.torneo.cantidad!);
    } else {
      this.alerta_equipos = false;
    }
  }
  async onClick() {
    if (this.torneo.nombreprod == '') {
      await this.nombreInput.setFocus();
    } else {
      const cargando = await this.loadingController.create({
        message: 'Actualizando Torneo',
        cssClass: 'modal-cargando',
      });
      // Muestra el Loading Controller
      await cargando.present();
      console.log(this.torneo.idProducto);
      await this.restApi
        .updateTorneo(this.torneo.idProducto, this.torneo)
        .subscribe({
          next: (torneo) => {
            cargando.dismiss();
            this.router.navigate([
              '/tabs/torneo-futbol/detalle-torneo/' + this.torneo.idProducto,
            ]);
          },
          complete: () => {},
          error: (err) => {
            console.log(err);
            cargando.dismiss();
          },
        });
      console.log('¡Registro agregado con éxito!');
    }
  }
}
