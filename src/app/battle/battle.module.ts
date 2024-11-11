import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BattlePageRoutingModule } from './battle-routing.module';

import { BattlePage } from './battle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BattlePageRoutingModule
  ],
  declarations: [BattlePage]
})
export class BattlePageModule {}
