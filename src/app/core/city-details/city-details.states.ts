import { CityDetailsComponent } from './city-details.component';
import { CitiesListComponent } from '../cities-list/cities-list.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const rootCityDetailsStates: Ng2StateDeclaration = {
  parent: 'app',
  name: 'cities',
  url: '/cities',
  redirectTo: 'app',
};

export const CityDetailsStates: Ng2StateDeclaration = {
  name: 'cities.woeid',
  url: '/:woeid',
  component: CityDetailsComponent,
};


export const CITY_DETAILS_STATES = [
  rootCityDetailsStates,
  CityDetailsStates,
];

