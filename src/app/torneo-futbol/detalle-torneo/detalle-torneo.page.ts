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
  ActionSheetController,
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
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController
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

  async presentOpciones(id: number) {
    const actionSheet = await this.actionSheetController.create({
      header: '¿Estás seguro de que quieres eliminar este torneo?',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            console.log(id);
            this.eliminarTorneo(id);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
  
  async eliminarTorneo(id: number) {
    const cargando = await this.loadingController.create({
      message: 'Eliminando',
    });
    await cargando.present();
    await this.restApi.deleteTorneo(id).subscribe({
      next: (res) => {
        console.log('Error Eliminar Detalle', res);
        cargando.dismiss();
        this.router.navigate(['/tabs/listar/torneos']);
      },
      complete: () => {},
      error: (err) => {
        console.log('Error Eliminar Detalle', err);
        cargando.dismiss(); //Elimina la espera
      },
    });
  }
}
