import { Routes } from '@angular/router';
import { BusinessLinesComponent } from './business-lines.component';


export const businessLinesRoutes: Routes = [
  {
    path: '',
    component: BusinessLinesComponent,
    children: [
      {
        path: '',
        redirectTo: 'business-lines',
        pathMatch: 'full',
      },
    ],
  },
];
