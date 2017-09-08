import { NgModule } from '@angular/core';
import { CitiesSearchComponent } from './cities-search.component';
import { WeatherDetailsService } from '../services/weather-details.service';
import { MdAutocompleteModule, MdNativeDateModule, MdOptionModule, MdSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CitiesSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdNativeDateModule,
    MdAutocompleteModule,
    MdSelectModule,
    MdOptionModule,
  ],
  providers: [
    WeatherDetailsService,
  ],
  exports: [
    CitiesSearchComponent,
  ]
})

export class CitiesSearchModule {
}
