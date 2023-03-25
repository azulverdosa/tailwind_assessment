import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { Airport } from '../components/airports/airport.types';
import { environment } from 'src/environments/environment.development';

//create header for http 'options' parameter
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-Token': environment.API_TOKEN,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  // define api url
  private apiUrl = `${environment.API_URL}/airports`;

  //add HttpClient as provider
  constructor(private http: HttpClient) {}

  //add observable
  getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(this.apiUrl, httpOptions);
  }
}
