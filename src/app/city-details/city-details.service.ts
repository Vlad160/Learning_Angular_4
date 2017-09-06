import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ICityDetails } from "./ICityDetails";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import 'rxjs/add'

@Injectable()
export class CityDetailsService {

  private apiRoot: string = `https://www.metaweather.com/api/location`;

  constructor(private http: Http) {
  }

  getCityDetails(woeid: number | string): Promise<ICityDetails> {
    const url: string = `${this.apiRoot}/${woeid}`;
    return this.http.get(url)
      .map(response => response.json().data as ICityDetails)

  }
}
