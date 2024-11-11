import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DicesPage } from './dices.page';

const routes: Routes = [
  {
    path: '',
    component: DicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DicesPageRoutingModule {}
