import { NgModule } from '@angular/core';
import { CityDetailsComponent } from './city-details.component';
import { WeatherDetailsService } from '../../shared/services/weather-details.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';
import { DateDetailsComponent } from '../date-details/date-details.component';

@NgModule({
  exports: [
    CityDetailsComponent,
    DateDetailsComponent
  ],

  declarations: [
    CityDetailsComponent,
    DateDetailsComponent
  ],

  providers: [
    WeatherDetailsService
  ],

  imports: [
    HttpModule,
    CommonModule,
    MdButtonModule,
  ]
})

export class CityDetailsModule {
}
