import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionStatPage } from './region-stat.page';

const routes: Routes = [
  {
    path: '',
    component: RegionStatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionStatPageRoutingModule {}
