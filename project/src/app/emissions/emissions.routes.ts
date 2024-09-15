import { Routes } from '@angular/router';
import { SupplierPerformanceComponent } from './supplier-performance/supplier-performance.component';
import { EmissionsComponent } from './emissions.component';


export const emissionsRoutes: Routes = [

  {
    path: '',
    component: EmissionsComponent,
    children: [
      {
        path: 'supplier-performance',
        component: SupplierPerformanceComponent,
      },
      {
        path: '',
        redirectTo: 'supplier-performance',
        pathMatch: 'full',
      },
    ],
  },
];
