import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmissionsComponent } from './emissions.component';
import { SupplierPerformanceComponent } from './supplier-performance/supplier-performance.component';
import { emissionsRoutes } from './emissions.routes';
import { SharedModule } from '../shared/shared.module';
import { SpinnerModule } from '@coreui/angular';

@NgModule({
  declarations: [
    EmissionsComponent,
    SupplierPerformanceComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    SpinnerModule,
    RouterModule.forChild(emissionsRoutes),
  ],
})
export class EmissionsModule {}
