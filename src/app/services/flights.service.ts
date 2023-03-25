import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

import { Flight } from '../components/flights/flight.types';

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
export class FlightsService {
  // define api url
  private apiUrl = `${environment.API_URL}/currentflights`;

  //add HttpClient as provider
  constructor(private http: HttpClient) {}

  //add observable
  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiUrl, httpOptions);
  }
}
