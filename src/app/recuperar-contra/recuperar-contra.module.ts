import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecuperarContraPageRoutingModule } from './recuperar-contra-routing.module';

import { RecuperarContraPage } from './recuperar-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarContraPageRoutingModule,
  ],
  declarations: [RecuperarContraPage],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RecuperarContraPage,
    },
  ],
})
export class RecuperarContraPageModule {}
