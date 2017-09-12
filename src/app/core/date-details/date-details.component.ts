import { Component, Input } from '@angular/core';
import { IDayDetails } from '../../shared/Interfaces/IDayDetails';

@Component({
  selector: 'date-details',
  templateUrl: './date-details.template.html',
  styleUrls: ['../date-details/date-details.component.scss'],
})

export class DateDetailsComponent {

  @Input() dayDetails: IDayDetails;

  constructor() {
  }
}
