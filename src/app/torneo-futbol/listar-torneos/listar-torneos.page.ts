import { Component, OnInit } from '@angular/core';
import { TorneoFutbolService } from '../torneo-futbol.service';
import { ClToreno_futbol } from '../model/ClTorneo-futbol';
import { IonCard, LoadingController, NavController, ActionSheetController  } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-listar-torneos',
  templateUrl: './listar-torneos.page.html',
  styleUrls: ['./listar-torneos.page.scss'],
})
export class ListarTorneosPage {
  constructor(
    public loadingController: LoadingController,
    private restApi: TorneoFutbolService,
    private actionSheetController: ActionSheetController,
    private router: Router
  ) {}


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
          }
        }, {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async eliminarTorneo(id: number) {
    const cargando = await this.loadingController.create({
      message: 'Eliminando'
    });
    await cargando.present();
    await this.restApi.deleteTorneo(id)
      .subscribe({
        next: (res) => {
          console.log("Error Eliminar", res);
          cargando.dismiss();
          this.getTorneos();
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error Eliminar", err);
          cargando.dismiss(); //Elimina la espera
        }

      })
  }
  
  

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
