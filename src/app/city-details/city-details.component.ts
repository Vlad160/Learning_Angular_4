import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { ICityDetails } from '../Interfaces/ICityDetails';
import { WeatherDetailsService } from '../services/weather-details.service';

@Component({
  selector: 'city-details',
  templateUrl: './city-details.template.html',
})

export class CityDetailsComponent implements OnInit {
  cityDetails: ICityDetails;

  constructor(private weatherService: WeatherDetailsService, private state: StateService) {
  }

  async ngOnInit() {
    this.cityDetails = await this.weatherService.getCityDetails(this.state.params.woeid);
  }

  backToMain(): void {
    this.state.go('cities');
  }

}
