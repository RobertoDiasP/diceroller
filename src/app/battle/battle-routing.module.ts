import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattlePage } from './battle.page';

const routes: Routes = [
  {
    path: '',
    component: BattlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BattlePageRoutingModule {}
