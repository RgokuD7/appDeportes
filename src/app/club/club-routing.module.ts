import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubPage } from './club.page';

const routes: Routes = [
  {
    path: '',
    component: ClubPage
  },  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'crear-equipo',
    loadChildren: () => import('./crear-equipo/crear-equipo.module').then( m => m.CrearEquipoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubPageRoutingModule {}
