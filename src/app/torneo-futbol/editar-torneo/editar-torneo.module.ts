import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarTorneoPageRoutingModule } from './editar-torneo-routing.module';

import { EditarTorneoPage } from './editar-torneo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarTorneoPageRoutingModule
  ],
  declarations: [EditarTorneoPage]
})
export class EditarTorneoPageModule {}
