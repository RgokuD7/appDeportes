import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TorneoFutbolPageRoutingModule } from './torneo-futbol-routing.module';
import { TorneoFutbolService } from './torneo-futbol.service';
import { TorneoFutbolPage } from './torneo-futbol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TorneoFutbolPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [TorneoFutbolPage],
  providers: [TorneoFutbolService],
})
export class TorneoFutbolPageModule {}
