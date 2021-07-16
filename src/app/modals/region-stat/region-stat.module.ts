import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionStatPageRoutingModule } from './region-stat-routing.module';

import { RegionStatPage } from './region-stat.page';

import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxChartsModule,
    RegionStatPageRoutingModule
  ],
  declarations: [RegionStatPage]
})
export class RegionStatPageModule {}
