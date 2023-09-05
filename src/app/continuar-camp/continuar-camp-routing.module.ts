import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinuarCampPage } from './continuar-camp.page';

const routes: Routes = [
  {
    path: '',
    component: ContinuarCampPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinuarCampPageRoutingModule {}
