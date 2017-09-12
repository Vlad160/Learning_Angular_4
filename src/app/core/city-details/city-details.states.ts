import { CityDetailsComponent } from './city-details.component';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { CityDetailsWoiedComponent } from './city-details-woied.component';

export const rootCityDetailsStates: Ng2StateDeclaration = {
  name: 'cities',
  url: '/cities',
  redirectTo: 'app',
  component: CityDetailsComponent,
};

export const CityDetailsStates: Ng2StateDeclaration = {
  name: 'cities.details',
  url: '/:woeid',
  component: CityDetailsWoiedComponent,
  params: {
    woeid: null,
  }
};


export const CITY_DETAILS_STATES = [
  rootCityDetailsStates,
  CityDetailsStates,
];

