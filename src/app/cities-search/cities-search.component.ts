import { Component } from '@angular/core';
import { WeatherDetailsService } from '../services/weather-details.service';
import { ICity } from '../Interfaces/ICity';

@Component({
  selector: 'cities-search',
  templateUrl: './cities-search.template.html',
})

export class CitiesSearchComponent {

  queryString: string;
  foundCities: ICity[];

  constructor(private weatherService: WeatherDetailsService) {
  }

  async searchCities(): Promise<void> {
    const foundCities: ICity[] = await this.weatherService.searchCity(this.queryString);
    console.log(foundCities);
  }

}
