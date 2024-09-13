import { Routes } from '@angular/router';
import { BusinessLinesComponent } from './business-lines/business-lines.component';

export const routes: Routes = [{
  path: 'emissions',
  loadChildren: () =>
    import('./emissions/emissions.module').then((m) => m.EmissionsModule),
},

{
  path: 'business-lines',
  component: BusinessLinesComponent,
  loadChildren: () =>
    import('./business-lines/business-lines.module').then((m) => m.BusinessLinesModule),
},
{
  path: '',
  redirectTo: 'emissions',
  pathMatch: 'full',
},
{
  path: '**',
  redirectTo: 'emissions',
},
];
