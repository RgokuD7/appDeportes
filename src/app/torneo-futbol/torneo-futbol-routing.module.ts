import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { TorneoFutbolPage } from './torneo-futbol.page';

const routes: Routes = [
  {
    path: '',
    component: TorneoFutbolPage
  },
  {
    path: 'crear-torneo-futbol',
    loadChildren: () => import('./crear-torneo-futbol/crear-torneo-futbol.module').then( m => m.CrearTorneoFutbolPageModule)
  },
  {
    path: 'listar-torneos',
    loadChildren: () => import('./listar-torneos/listar-torneos.module').then( m => m.ListarTorneosPageModule)
  },
  {
    path: 'editar-torneo/:id',
    loadChildren: () => import('./editar-torneo/editar-torneo.module').then( m => m.EditarTorneoPageModule)
  },
  {
    path: 'detalle-torneo/:id',
    loadChildren: () => import('./detalle-torneo/detalle-torneo.module').then( m => m.DetalleTorneoPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorneoFutbolPageRoutingModule {}
