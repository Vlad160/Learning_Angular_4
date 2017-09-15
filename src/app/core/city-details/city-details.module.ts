import { NgModule } from '@angular/core';
import { WeatherDetailsService } from '../../shared/Services/weather-details.service';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { DateDetailsComponent } from '../date-details/date-details.component';
import { UIRouterModule } from '@uirouter/angular';
import { CITY_DETAILS_STATES } from './city-details.states';
import { CityDetailsComponent } from './city-details.component';

@NgModule({
  exports: [
    DateDetailsComponent,
    CityDetailsComponent,
  ],

  declarations: [
    DateDetailsComponent,
    CityDetailsComponent,
  ],

  providers: [
    WeatherDetailsService
  ],

  imports: [
    CommonModule,
    MdButtonModule,
    UIRouterModule.forChild({ states: CITY_DETAILS_STATES }),
  ]
})

export class CityDetailsModule {
}
