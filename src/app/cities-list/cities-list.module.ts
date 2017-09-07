import { NgModule } from '@angular/core';
import { CitiesListComponent } from './cities-list.component';
import { CommonModule } from '@angular/common';
import { WeatherDetailsService } from '../services/weather-details.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CitiesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    WeatherDetailsService,
  ],
  exports: [CitiesListComponent]
})

export class CitiesListModule {
}
