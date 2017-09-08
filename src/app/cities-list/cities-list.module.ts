import { NgModule } from '@angular/core';
import { CitiesListComponent } from './cities-list.component';
import { CommonModule } from '@angular/common';
import { CitiesSearchModule } from '../cities-search/cities-search.module';

@NgModule({
  declarations: [
    CitiesListComponent
  ],
  imports: [
    CommonModule,
    CitiesSearchModule,
  ],
  providers: [],
  exports: [CitiesListComponent]
})

export class CitiesListModule {
}
