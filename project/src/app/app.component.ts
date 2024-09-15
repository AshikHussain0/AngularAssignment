import { Component, HostListener } from '@angular/core';
import { INavData } from '@coreui/angular';
import { SharedService } from './shared/shared-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
  sidebar!: INavData[];
  isSmallScreen: boolean = false;
  isSidebarVisible: boolean = true;

  constructor() {
    this.checkScreenSize();
    this.sidebar = [{
      name: 'Emissions',
      url: 'emissions',
    },
    {
      name: 'Business Lines',
      url: 'business-lines',
    },]
  }

  // Check screen size on resize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  // Update property based on screen width
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 992;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}
