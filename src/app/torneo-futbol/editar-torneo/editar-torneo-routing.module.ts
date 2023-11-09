import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarTorneoPage } from './editar-torneo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarTorneoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarTorneoPageRoutingModule {}
