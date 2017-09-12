import { CitiesListComponent } from './cities-list/cities-list.component';
import { CityDetailsComponent } from './city-details/city-details.component';

export const mainState = {
  name: 'App',
  url: '/cities',
  component: CitiesListComponent,
};

export const citiesState = {
  name: 'cities.**',
  url: '/cities',
  component: CitiesListComponent,
  loadChildren: './city-details/city-details.module#CityDetailsModule',
};

export const futureCityDetailsStates = {
  name: 'cities.woeid',
  url: '/:woeid',
  component: CityDetailsComponent,
};

export const APP_STATES = [
  mainState,
  citiesState,
  futureCityDetailsStates,
];
