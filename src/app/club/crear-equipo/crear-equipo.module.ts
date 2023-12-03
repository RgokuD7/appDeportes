import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEquipoPageRoutingModule } from './crear-equipo-routing.module';

import { CrearEquipoPage } from './crear-equipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEquipoPageRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [CrearEquipoPage]
})
export class CrearEquipoPageModule {}
