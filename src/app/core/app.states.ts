import { CitiesListComponent } from './cities-list/cities-list.component';


export const mainState = {
  name: 'app',
  url: '/',
  component: CitiesListComponent,
};
export const futureCityDetailsState = {
  name: 'cities.**',
  url: '/cities',
  loadChildren: './city-details/city-details.module#CityDetailsModule',
};

export const APP_STATES = [
  mainState,
  futureCityDetailsState,
];
