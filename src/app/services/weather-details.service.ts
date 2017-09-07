import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ICityDetails } from '../Interfaces/ICityDetails';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ICity } from '../Interfaces/ICity';
import { CITIES } from '../../assets/mock-cities';

@Injectable()
export class WeatherDetailsService {

  private apiRoot = `https://www.metaweather.com/api/location`;
  private count: number;

  constructor(private http: Http) {
    this.count = 0;
  }

  getCityDetails(woeid: number | string): Promise<ICityDetails> {
    const url = `${this.apiRoot}/${woeid}`;
    console.log(this.count++);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ICityDetails);

  }

  getCities(): ICity[] {
    console.log(this.count++);
    return CITIES;
  }

  searchCity(queryString: string): Promise<ICity[]> {
    const url = `${this.apiRoot}/search/?query=${queryString}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ICity[]);
  }
}
