import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaloriasPageRoutingModule } from './calorias-routing.module';

import { CaloriasPage } from './calorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaloriasPageRoutingModule
  ],
  declarations: [CaloriasPage]
})
export class CaloriasPageModule {}
