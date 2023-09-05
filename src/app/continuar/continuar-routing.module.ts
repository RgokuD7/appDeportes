import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinuarPage } from './continuar.page';

const routes: Routes = [
  {
    path: '',
    component: ContinuarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinuarPageRoutingModule {}
