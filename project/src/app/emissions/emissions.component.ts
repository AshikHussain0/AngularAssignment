import { Component } from '@angular/core';

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrl: './emissions.component.scss'
})
export class EmissionsComponent {
  title!: string;

  setActiveComponent(component: string) {
    this.title = component;
  }
}
