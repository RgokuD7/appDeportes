import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TorneoFutbolPageRoutingModule } from './torneo-futbol-routing.module';

import { TorneoFutbolPage } from './torneo-futbol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorneoFutbolPageRoutingModule
  ],
  declarations: [TorneoFutbolPage]
})
export class TorneoFutbolPageModule {}
