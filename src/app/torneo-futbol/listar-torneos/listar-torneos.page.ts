import { Component, OnInit } from '@angular/core';
import { TorneoFutbolService } from '../torneo-futbol.service';
import { ClToreno_futbol } from '../model/ClTorneo-futbol';
import { IonCard, LoadingController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-listar-torneos',
  templateUrl: './listar-torneos.page.html',
  styleUrls: ['./listar-torneos.page.scss'],
})
export class ListarTorneosPage {
  constructor(
    public loadingController: LoadingController,
    private restApi: TorneoFutbolService
  ) {}

  ionViewDidEnter() {
    this.getTorneos();
  }

  torneos: ClToreno_futbol[] = [];

  // Método  que rescta los productos
  async getTorneos() {
    // Crea un Wait (Esperar)
    const cargando = await this.loadingController.create({
      message: 'Buscando Torneos',
    });
    await cargando.present();
    // Obtiene el Observable del servicio
    await this.restApi.getTorneos().subscribe({
      next: (res) => {
        // Si funciona asigno el resultado al arreglo torneos
        this.torneos = res;
        console.log('torneos:', this.torneos);
        cargando.dismiss();
      },
      complete: () => {},
      error: (err) => {
        // Si da error, imprimo en consola.
        console.log('Err:' + err);
        cargando.dismiss();
      },
    });
  }
}
