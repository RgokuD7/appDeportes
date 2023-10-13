import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-partidos',
    loadChildren: () => import('./menu-partidos/menu-partidos.module').then( m => m.MenuPartidosPageModule)
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
    path: 'product-add',
    loadChildren: () => import('./producto/product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-edit',
    loadChildren: () => import('./producto/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./producto/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-all',
    loadChildren: () => import('./producto/product-all/product-all.module').then( m => m.ProductAllPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./producto/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'cliente/listar',
    loadChildren: () => import('./cliente/listar/cliente.listar.module').then(m => m.ClienteListarPageModule)
  },
  {
    path: 'cliente/agregar',
    loadChildren: () => import('./cliente/agregar/cliente.agregar.module').then(m => m.ClienteAgregarPageModule)
  },
  {
    path: 'cliente/actualizar',
    loadChildren: () => import('./cliente/actualizar/cliente.actualizar.module').then(m => m.ClienteActualizarPageModule)
  },
  {
    path: 'cliente/eliminar',
    loadChildren: () => import('./cliente/eliminar/cliente.eliminar.module').then(m => m.ClienteEliminarPageModule)
  },

  {
    path: 'cliente/leer',
    loadChildren: () => import('./cliente/leer/cliente.leer.module').then(m => m.ClienteLeerPageModule)
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
