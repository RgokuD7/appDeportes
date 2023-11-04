import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearTorneoFutbolPageRoutingModule } from './crear-torneo-futbol-routing.module';

import { CrearTorneoFutbolPage } from './crear-torneo-futbol.page';

import { TorneoFutbolService } from '../torneo-futbol.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearTorneoFutbolPageRoutingModule
  ],
  declarations: [CrearTorneoFutbolPage]
})
export class CrearTorneoFutbolPageModule {}
