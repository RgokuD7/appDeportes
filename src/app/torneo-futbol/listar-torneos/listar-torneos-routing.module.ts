import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarTorneosPage } from './listar-torneos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarTorneosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarTorneosPageRoutingModule {}
