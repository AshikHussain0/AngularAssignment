import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: 'emissions',
  loadChildren: () =>
    import('./emissions/emissions.module').then((m) => m.EmissionsModule),
},
{
  path: 'business-lines',
  loadChildren: () =>
    import('./business-lines/business-lines.module').then((m) => m.BusinessLinesModule),
},
{
  path: '',
  redirectTo: 'emissions/supplier-performance',
  pathMatch: 'full',
},
{
  path: '**',
  redirectTo: 'emissions/supplier-performance',
},
];
