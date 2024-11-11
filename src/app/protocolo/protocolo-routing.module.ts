import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocoloPage } from './protocolo.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocoloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocoloPageRoutingModule {}
