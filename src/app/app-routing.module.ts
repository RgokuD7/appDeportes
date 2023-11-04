import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'amistoso',
    loadChildren: () => import('./amistoso/amistoso.module').then( m => m.AmistosoPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'continuar',
    loadChildren: () => import('./continuar/continuar.module').then( m => m.ContinuarPageModule)
  },
  {
    path: 'continuar-camp',
    loadChildren: () => import('./continuar-camp/continuar-camp.module').then( m => m.ContinuarCampPageModule)
  },
  {
    path: 'nuevo-camp',
    loadChildren: () => import('./nuevo-camp/nuevo-camp.module').then( m => m.NuevoCampPageModule)
  },
  {
    path: 'torneo-futbol',
    loadChildren: () => import('./torneo-futbol/torneo-futbol.module').then( m => m.TorneoFutbolPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
