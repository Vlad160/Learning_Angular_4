import { Component, OnInit } from '@angular/core';
import { ICityDetails } from '../Interfaces/ICityDetails';
import { CityDetailsService } from '../services/city-details.service';

@Component({
  selector: 'city-details',
  templateUrl: './city-details.template.html',
})

export class CityDetailsComponent implements OnInit {

  cityDetails: ICityDetails;

  constructor(private cityDetailsService: CityDetailsService) {
    //Create class that implements interface and make new instance?
    //Observable?
  }

  ngOnInit() {
    this.getCityDetails(44418);
  }

  getCityDetails(woeid: number | string): void {
    this.cityDetailsService.getCityDetails(woeid)
      .then((cityDetails: ICityDetails) => {
        this.cityDetails = cityDetails;
      });
  }

}
