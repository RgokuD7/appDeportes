import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinuarPageRoutingModule } from './continuar-routing.module';

import { ContinuarPage } from './continuar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinuarPageRoutingModule
  ],
  declarations: [ContinuarPage]
})
export class ContinuarPageModule {}
