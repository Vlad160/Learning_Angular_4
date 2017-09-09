import { NgModule } from '@angular/core';
import { CityDetailsComponent } from './city-details.component';
import { WeatherDetailsService } from '../services/weather-details.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MdButton, MdButtonBase, MdButtonModule } from '@angular/material';
import { DateDetailsModule } from '../date-details/date-details.module';

@NgModule({
  exports: [CityDetailsComponent],

  declarations: [CityDetailsComponent],

  providers: [
    WeatherDetailsService
  ],

  imports: [
    HttpModule,
    CommonModule,
    MdButtonModule,
    DateDetailsModule,
  ]
})

export class CityDetailsModule {
}
