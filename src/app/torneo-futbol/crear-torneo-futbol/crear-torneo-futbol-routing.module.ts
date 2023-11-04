import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearTorneoFutbolPage } from './crear-torneo-futbol.page';

const routes: Routes = [
  {
    path: '',
    component: CrearTorneoFutbolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearTorneoFutbolPageRoutingModule {}
