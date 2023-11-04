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
  selector: 'app-detalle-torneo',
  templateUrl: './detalle-torneo.page.html',
  styleUrls: ['./detalle-torneo.page.scss'],
})
export class DetalleTorneoPage {
  constructor(
    public loadingController: LoadingController,
    private restApi: TorneoFutbolService,
    public router: Router,
    public actRoute: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  torneo = new ClToreno_futbol();

  isCopa = false;
  tipoNoSelected = false;

  ligaImg = '../../assets/icon/leaderboard.svg';
  ligaColorText = 'white';
  copaImg = '../../assets/icon/cup.svg';
  copaColorText = 'white';

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
            //this.faseGrupos = false;
          } else if (torneo.precio == 1) {
            //this.faseGrupos = true;
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

}
