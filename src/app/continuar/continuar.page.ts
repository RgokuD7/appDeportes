import { Component, OnInit } from '@angular/core';


export interface TablaPosiciones {
  equipo: string;
  position: number;
  jugados: number;
  ganados: number;
  empatados: number;
  perdidos: number;
  puntos: number;
}

const ELEMENT_DATA: TablaPosiciones[] = [
  { position: 1, equipo: 'Colo-colo', jugados: 10, ganados: 10, empatados: 0, perdidos: 0, puntos: 30 },
  { position: 2, equipo: 'Universidad de Chile', jugados: 10, ganados: 7, empatados: 2, perdidos: 1, puntos: 23 },
  { position: 3, equipo: 'Universidad Católica', jugados: 10, ganados: 7, empatados: 1, perdidos: 2, puntos: 22 },
  { position: 4, equipo: 'Santiago Wanderers', jugados: 10, ganados: 5, empatados: 3, perdidos: 2, puntos: 18 },
  { position: 5, equipo: 'O\'Higgins', jugados: 10, ganados: 4, empatados: 4, perdidos: 2, puntos: 16 },
  { position: 6, equipo: 'Audax Italiano', jugados: 10, ganados: 4, empatados: 3, perdidos: 3, puntos: 15 },
  { position: 7, equipo: 'Unión Española', jugados: 10, ganados: 3, empatados: 5, perdidos: 2, puntos: 14 },
  { position: 8, equipo: 'Coquimbo Unido', jugados: 10, ganados: 3, empatados: 4, perdidos: 3, puntos: 13 },
  { position: 9, equipo: 'Huachipato', jugados: 10, ganados: 3, empatados: 3, perdidos: 4, puntos: 12 },
  { position: 10, equipo: 'Palestino', jugados: 10, ganados: 2, empatados: 3, perdidos: 5, puntos: 9 },
  // Puedes seguir agregando más equipos según lo necesites
];

@Component({
  selector: 'app-continuar',
  templateUrl: './continuar.page.html',
  styleUrls: ['./continuar.page.scss'],
})
export class ContinuarPage implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'equipo', 'puntos', 'jugados', 'ganados', 'empatados', 'perdidos'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}
