import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleTorneoPage } from './detalle-torneo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleTorneoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleTorneoPageRoutingModule {}
