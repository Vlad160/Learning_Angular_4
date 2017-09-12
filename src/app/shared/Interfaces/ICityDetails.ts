import { IDayDetails } from './IDayDetails';

export interface ICityDetails {
  title: string;
  woeid: number;
  time: string;
  consolidated_weather: IDayDetails[];
}
