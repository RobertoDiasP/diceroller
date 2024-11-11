import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocoloPageRoutingModule } from './protocolo-routing.module';

import { ProtocoloPage } from './protocolo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtocoloPageRoutingModule
  ],
  declarations: [ProtocoloPage]
})
export class ProtocoloPageModule {}
