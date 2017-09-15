
import { Ng2StateDeclaration } from '@uirouter/angular';
import { CityDetailsComponent } from './city-details.component';


export const CityDetailsStates: Ng2StateDeclaration = {
  name: 'cities',
  url: '/cities/:woeid',
  component: CityDetailsComponent,
  params: {
    woeid: null,
  }
};


export const CITY_DETAILS_STATES = [
  CityDetailsStates,
];

