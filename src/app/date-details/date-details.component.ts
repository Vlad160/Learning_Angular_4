import { Component, Input } from '@angular/core';
import { IDayDetails } from '../Interfaces/IDayDetails';

@Component({
  selector: 'date-details',
  templateUrl: './date-details.template.html',
})

export class DateDetailsComponent {

  @Input() dayDetails: IDayDetails[];

  constructor() {
  }
}
