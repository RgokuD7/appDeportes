import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoCampPage } from './nuevo-camp.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoCampPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoCampPageRoutingModule {}
