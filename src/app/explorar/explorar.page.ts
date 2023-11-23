import { Component, OnInit } from '@angular/core';
import { IonCard, LoadingController, NavController, ActionSheetController  } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {

  constructor(
    public loadingController: LoadingController,
    private actionSheetController: ActionSheetController,
    private router: Router
  ) {}

  ngOnInit() {
    
  }

  async cargar() {
    // Crea un Wait (Esperar)
    const cargando = await this.loadingController.create({
      message: 'Buscando Noticias',
    });
    await cargando.present();
    // Obtiene el Observable del servicio
    
  }

}
