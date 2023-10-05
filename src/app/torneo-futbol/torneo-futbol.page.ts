import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-torneo-futbol',
  templateUrl: './torneo-futbol.page.html',
  styleUrls: ['./torneo-futbol.page.scss'],
})
export class TorneoFutbolPage implements OnInit {

  constructor() { }

  torneoFut: any = {
    jugadores: 0,
    tpTorneo: null,
    playOff: false,


  }

  ngOnInit() {
  }

  nuevoTorneo(){

  }

  tipoFutNoIngresado: boolean = false;
  jugadoresInvalido:  boolean = false;
  tFutChange(){

  }

  jugadoresNoIngresado: boolean = false;
  jugadoresInput(){

  }

  tpTorneoNoIngresado: boolean = false;
  tpTorneoChange(){

  }
}
