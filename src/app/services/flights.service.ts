import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { Flight } from '../components/flights/flight.types';

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
export class FlightsService {
  // define api url
  private apiUrl = 'http://xiapp.tradewindapps.com:9912/currentflights';

  //add HttpClient as provider
  constructor(private http: HttpClient) {}

  //add observable
  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiUrl, httpOptions);
  }
}
