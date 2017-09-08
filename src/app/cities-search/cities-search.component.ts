import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherDetailsService } from '../services/weather-details.service';
import { ICity } from '../Interfaces/ICity';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'cities-search',
  templateUrl: './cities-search.template.html',
})

export class CitiesSearchComponent {
  foundCities: ICity[];
  stateControl: FormControl;
  selectedCity: ICity;
  @Output() selectedCityEvent: EventEmitter<string> = new EventEmitter();

  constructor(private weatherService: WeatherDetailsService) {
    this.stateControl = new FormControl();
    this.stateControl.valueChanges
      .debounceTime(500)
      .subscribe(query => this.searchCities(query));
  }

  async searchCities(query): Promise<void> {
    this.foundCities = await this.weatherService.searchCity(query);
  }

  selected(city: ICity): void {
    console.log(city.title);
    this.selectedCityEvent.emit(`${city.woeid}`);
  }

  displayFn(city: string): void {
    console.log(city);
  }

}
