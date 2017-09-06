import { NgModule } from '@angular/core';
import { CityDetailsComponent } from './city-details.component';
import { CityDetailsService } from '../services/city-details.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [CityDetailsComponent],
  declarations: [CityDetailsComponent],
  providers: [CityDetailsService],
  imports: [
    HttpModule,
    CommonModule,
  ]
})

export class CityDetailsModule {
}
