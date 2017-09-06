import { Component } from '@angular/core';
import { ICityDetails } from './ICityDetails';
import { CityDetailsService } from './city-details.service';

@Component({
  selector: 'city-details',
  templateUrl: './city-details.template.html',
})

export class CityDetailsComponent {

  cityDetails: ICityDetails;

  constructor(private cityDetailsService: CityDetailsService) {
  }

  getCityDetails(woeid: number | string): void {
    this.cityDetailsService.getCityDetails(woeid)
      .then((cityDetails: ICityDetails) => this.cityDetails = cityDetails);
  }

}
