import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarTorneosPageRoutingModule } from './listar-torneos-routing.module';

import { ListarTorneosPage } from './listar-torneos.page';

import { TorneoFutbolService } from '../torneo-futbol.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarTorneosPageRoutingModule
  ],
  declarations: [ListarTorneosPage]
})
export class ListarTorneosPageModule {}
