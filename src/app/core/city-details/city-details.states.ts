
import { Ng2StateDeclaration } from '@uirouter/angular';
import { WeatherDetailsComponent } from './weather-details.component';


export const CityDetailsStates: Ng2StateDeclaration = {
  name: 'cities',
  url: '/cities/:woeid',
  component: WeatherDetailsComponent,
  params: {
    woeid: null,
  }
};


export const CITY_DETAILS_STATES = [
  CityDetailsStates,
];

