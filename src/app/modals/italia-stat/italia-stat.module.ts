import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItaliaStatPageRoutingModule } from './italia-stat-routing.module';

import { ItaliaStatPage } from './italia-stat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItaliaStatPageRoutingModule
  ],
  declarations: [ItaliaStatPage]
})
export class ItaliaStatPageModule {}
