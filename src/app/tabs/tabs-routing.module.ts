import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'perfil',
        loadChildren: () =>
          import('../perfil/perfil.module').then((m) => m.PerfilPageModule),
      },

      {
        path: 'explorar',
        loadChildren: () =>
          import('../explorar/explorar.module').then(
            (m) => m.ExplorarPageModule
          ),
      },
      {
        path: 'favoritos',
        loadChildren: () =>
          import('../favoritos/favoritos.module').then(
            (m) => m.FavoritosPageModule
          ),
      },
      {
        path: 'club',
        loadChildren: () =>
          import('../club/club.module').then((m) => m.ClubPageModule),
      },
      {
        path: 'crear-equipo',
        loadChildren: () => import('../club/crear-equipo/crear-equipo.module').then( m => m.CrearEquipoPageModule)
      },
      {
        path: 'torneos',
        loadChildren: () =>
          import('../torneos/torneos.module').then((m) => m.TorneosPageModule),
      },
      {
        path: 'torneo-futbol',
        loadChildren: () =>
          import('../torneo-futbol/torneo-futbol.module').then(
            (m) => m.TorneoFutbolPageModule
          ),
      },
      {
        path: 'listar-torneos',
        loadChildren: () =>
          import('../torneo-futbol/listar-torneos/listar-torneos.module').then(
            (m) => m.ListarTorneosPageModule
          ),
      },
      {
        path: 'mapa',
        loadChildren: () => import('../mapa/mapa.module').then( m => m.MapaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/favoritos',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/favoritos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
