import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-green-spinner',
  templateUrl: './green-spinner.component.html',
  styleUrl: './green-spinner.component.scss'
})
export class GreenSpinnerComponent {
  @Input() isLoading!: boolean;

}
