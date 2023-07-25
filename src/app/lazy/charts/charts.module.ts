import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ChartsComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    RouterModule,
    NgChartsModule
 ],
  exports:[ChartsComponent]
})
export class ChartsModule { }
