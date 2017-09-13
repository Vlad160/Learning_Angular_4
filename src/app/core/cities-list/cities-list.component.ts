import { Component } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { ICity } from '../../shared/Interfaces/ICity';
import { WeatherDetailsService } from '../../shared/Services/weather-details.service';

@Component({
  selector: 'cities-list',
  templateUrl: './cities-list.template.html',
})

export class CitiesListComponent {

  citiesList: ICity[];

  constructor(private weatherService: WeatherDetailsService, private state: StateService) {

    this.citiesList = weatherService.getCities();
  }

  getWeatherDetails(woied: number): void {
    this.state.go('cities', { woeid: woied });
  }

}
