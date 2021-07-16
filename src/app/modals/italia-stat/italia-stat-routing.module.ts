import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItaliaStatPage } from './italia-stat.page';

const routes: Routes = [
  {
    path: '',
    component: ItaliaStatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItaliaStatPageRoutingModule {}
