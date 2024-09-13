import { Component } from '@angular/core';
import { INavData } from '@coreui/angular';
import { SharedService } from './shared/shared-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  sidebar!: INavData[];

  constructor() {
    this.sidebar = [{
      name: 'Emissions',
      url: 'emissions',
    },
    {
      name: 'Business Lines',
      url: 'business-lines',
    },]
  }

}
