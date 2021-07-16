import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { RegionStatPage } from  '../../modals/region-stat/region-stat.page'
import { ItaliaStatPage } from '../../modals/italia-stat/italia-stat.page'
import {NgxChartsModule} from '@swimlane/ngx-charts';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgxChartsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, RegionStatPage, ItaliaStatPage] , 
  entryComponents: [RegionStatPage,ItaliaStatPage]
})
export class Tab1PageModule {}
