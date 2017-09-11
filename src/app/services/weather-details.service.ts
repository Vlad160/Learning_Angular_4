import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ICityDetails } from '../Interfaces/ICityDetails';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ICity } from '../Interfaces/ICity';
import { CITIES } from '../../assets/mock-cities';
import { IDayDetails } from '../Interfaces/IDayDetails';
import { DatePipe } from '@angular/common';

@Injectable()
export class WeatherDetailsService {

  private apiRoot = `https://www.metaweather.com/api/location`;

  constructor(private http: Http, private datePipe: DatePipe) {
  }

  getCityDetails(woeid: number | string): Promise<ICityDetails> {
    const url = `${this.apiRoot}/${woeid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        return response.json() as ICityDetails;
      });
  }

  getCities(): ICity[] {
    return CITIES;
  }

  searchCity(queryString: string): Promise<ICity[]> {
    if (queryString) {
      const url = `${this.apiRoot}/search/?query=${queryString}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as ICity[]);
    }
    return;
  }

  getDateDetails(woeid: number, day: string): Promise<IDayDetails[]> {
    const dayTransform = this.datePipe.transform(day, 'yyyy/M/dd');
    const url = `${this.apiRoot}/location/${woeid}/${dayTransform}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as IDayDetails[]);
  }

}
