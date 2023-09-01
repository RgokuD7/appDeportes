import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPartidosPageRoutingModule } from './menu-partidos-routing.module';

import { MenuPartidosPage } from './menu-partidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPartidosPageRoutingModule
  ],
  declarations: [MenuPartidosPage]
})
export class MenuPartidosPageModule {}
