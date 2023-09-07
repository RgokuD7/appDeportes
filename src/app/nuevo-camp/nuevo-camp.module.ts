import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoCampPageRoutingModule } from './nuevo-camp-routing.module';

import { NuevoCampPage } from './nuevo-camp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoCampPageRoutingModule
  ],
  declarations: [NuevoCampPage]
})
export class NuevoCampPageModule {}
