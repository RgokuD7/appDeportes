import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinuarPageRoutingModule } from './continuar-routing.module';

import { ContinuarPage } from './continuar.page';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinuarPageRoutingModule,
    MatTableModule
  ],
  declarations: [ContinuarPage]
})
export class ContinuarPageModule {}
