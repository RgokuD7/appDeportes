import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinuarCampPageRoutingModule } from './continuar-camp-routing.module';

import { ContinuarCampPage } from './continuar-camp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinuarCampPageRoutingModule
  ],
  declarations: [ContinuarCampPage]
})
export class ContinuarCampPageModule {}
