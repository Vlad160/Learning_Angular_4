import { NgModule } from '@angular/core';
import { CitiesListComponent } from './cities-list.component';
import { CommonModule } from '@angular/common';
import { CitiesSearchModule } from '../cities-search/cities-search.module';
import { WeatherDetailsService } from '../services/weather-details.service';

@NgModule({
  declarations: [
    CitiesListComponent
  ],
  imports: [
    CommonModule,
    CitiesSearchModule,
  ],
  providers: [WeatherDetailsService],
  exports: [CitiesListComponent]
})

export class CitiesListModule {
}
