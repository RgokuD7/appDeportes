import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPartidosPage } from './menu-partidos.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPartidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPartidosPageRoutingModule {}
