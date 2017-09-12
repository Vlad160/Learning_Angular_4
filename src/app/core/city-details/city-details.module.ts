import { NgModule } from '@angular/core';
import { CityDetailsComponent } from './city-details.component';
import { WeatherDetailsService } from '../../shared/services/weather-details.service';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { DateDetailsComponent } from '../date-details/date-details.component';
import { UIRouterModule } from '@uirouter/angular';
import { CITY_DETAILS_STATES } from './city-details.states';
import { CityDetailsWoiedComponent } from './city-details-woied.component';


@NgModule({
  exports: [
    CityDetailsComponent,
    DateDetailsComponent,
    CityDetailsWoiedComponent,
  ],

  declarations: [
    CityDetailsComponent,
    DateDetailsComponent,
    CityDetailsWoiedComponent,
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
