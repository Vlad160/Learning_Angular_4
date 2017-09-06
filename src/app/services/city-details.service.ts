import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ICityDetails } from '../Interfaces/ICityDetails';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CityDetailsService {

  private apiRoot = `https://www.metaweather.com/api/location`;

  constructor(private http: Http) {
  }

  getCityDetails(woeid: number | string): Promise<ICityDetails> {
    const url = `${this.apiRoot}/${woeid}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ICityDetails);

  }
}
