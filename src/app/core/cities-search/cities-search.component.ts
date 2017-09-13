import { Component, EventEmitter, Output } from '@angular/core';
import { WeatherDetailsService } from '../../shared/Services/weather-details.service';
import { ICity } from '../../shared/Interfaces/ICity';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'cities-search',
  templateUrl: './cities-search.template.html',
  styleUrls: ['./cities-search.component.scss'],
})

export class CitiesSearchComponent {
  foundCities: ICity[];
  stateControl: FormControl;
  @Output() selectedCity: EventEmitter<number> = new EventEmitter<number>();

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
    this.selectedCity.emit(city.woeid);
  }
}
