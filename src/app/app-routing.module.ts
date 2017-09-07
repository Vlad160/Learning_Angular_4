import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { CityDetailsComponent } from './city-details/city-details.component';

const STATES = [
  {
    name: 'cities',
    url: '/cities',
    component: CitiesListComponent,
  },
  {
    name: 'cityDetails',
    url: '/cities/:woeid',
    component: CityDetailsComponent,
  },
];

@NgModule({
  imports: [
    UIRouterModule.forRoot({
      states: STATES,
      otherwise: { state: 'cities' },
      useHash: false,
    })
  ],
  exports: [UIRouterModule]
})

export class AppRoutingModule {
}
