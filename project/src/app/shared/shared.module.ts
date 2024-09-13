import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from '../shared/pie-chart/pie-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SpinnerComponent, SpinnerModule } from '@coreui/angular';
import { GreenSpinnerComponent } from './green-spinner/green-spinner.component';

@NgModule({
  declarations: [
    PieChartComponent,
    GreenSpinnerComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    SpinnerModule
  ],
  exports: [PieChartComponent, GreenSpinnerComponent]
})
export class SharedModule {}
