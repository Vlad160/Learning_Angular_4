import { NgModule } from '@angular/core';
import { CitiesListComponent } from './cities-list.component';
import { CommonModule } from '@angular/common';
import { WeatherDetailsService } from '../../shared/services/weather-details.service';
import { MdAutocompleteModule, MdNativeDateModule, MdOptionModule, MdSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitiesSearchComponent } from '../cities-search/cities-search.component';

@NgModule({
  declarations: [
    CitiesListComponent,
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
    CitiesListComponent,
    CitiesSearchComponent
  ]
})

export class CitiesListModule {
}
