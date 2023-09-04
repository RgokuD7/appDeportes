import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmistosoPageRoutingModule } from './amistoso-routing.module';

import { AmistosoPage } from './amistoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmistosoPageRoutingModule
  ],
  declarations: [AmistosoPage]
})
export class AmistosoPageModule {}
