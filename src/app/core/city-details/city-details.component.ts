import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { ICityDetails } from '../../shared/Interfaces/ICityDetails';
import { WeatherDetailsService } from '../../shared/services/weather-details.service';
import { IDayDetails } from '../../shared/Interfaces/IDayDetails';

@Component({
  selector: 'city-details',
  templateUrl: './city-details.template.html',
})

export class CityDetailsComponent implements OnInit {
  cityDetails: ICityDetails;
  dayDetails: IDayDetails[];
  loadingDayDetails = false;

  constructor(private weatherService: WeatherDetailsService, private state: StateService) {
  }

  async ngOnInit() {
    this.cityDetails = await this.weatherService.getCityDetails(this.state.params.woeid);
  }

  backToMain(): void {
    this.state.go('cities');
  }

  async getDayDetails(city: ICityDetails): Promise<void> {
    this.loadingDayDetails = true;
    this.dayDetails = await this.weatherService.getDateDetails(city.woeid, city.time);
    this.loadingDayDetails = false;
  }

}
