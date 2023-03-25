import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { Airport } from '../components/airports/airport.types';

//create header for http 'options' parameter
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-Token': '9265ee96af02fe95e132e33a447f8f08',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  // define api url
  private apiUrl = 'http://xiapp.tradewindapps.com:9912/airports';

  //add HttpClient as provider
  constructor(private http: HttpClient) {}

  //add observable
  getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(this.apiUrl, httpOptions);
  }
}
