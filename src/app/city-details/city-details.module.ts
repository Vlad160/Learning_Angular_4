import { NgModule } from '@angular/core';
import { CityDetailsComponent } from './city-details.component';
import { WeatherDetailsService } from '../services/weather-details.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [CityDetailsComponent],

  declarations: [CityDetailsComponent],

  providers: [

  ],

  imports: [
    HttpModule,
    CommonModule,
  ]
})

export class CityDetailsModule {
}
