import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaloriasPage } from './calorias.page';

const routes: Routes = [
  {
    path: '',
    component: CaloriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaloriasPageRoutingModule {}
