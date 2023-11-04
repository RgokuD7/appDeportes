import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleTorneoPageRoutingModule } from './detalle-torneo-routing.module';

import { DetalleTorneoPage } from './detalle-torneo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleTorneoPageRoutingModule
  ],
  declarations: [DetalleTorneoPage]
})
export class DetalleTorneoPageModule {}
