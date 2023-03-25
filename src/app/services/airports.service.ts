import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { Airport } from '../components/airports/airport.types';

const data = [
  {
    icao: 'CYYZ',
    latitude: 43.676667,
    longitude: -79.630556,
    name: 'Toronto Pearson International Airport',
  },
  {
    icao: 'CYVR',
    latitude: 49.194722,
    longitude: -123.183889,
    name: 'Vancouver International Airport',
  },
  {
    icao: 'CYYC',
    latitude: 51.1225,
    longitude: -114.013333,
    name: 'Calgary International Airport',
  },
  {
    icao: 'CYOW',
    latitude: 45.3225,
    longitude: -75.667222,
    name: 'Ottawa Macdonald-Cartier International Airport',
  },
  {
    icao: 'CYEG',
    latitude: 53.31,
    longitude: -113.579444,
    name: 'Edmonton International Airport',
  },
  {
    icao: 'CYHZ',
    latitude: 44.879722,
    longitude: -63.510278,
    name: 'Halifax Stanfield International Airport',
  },
];

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
  private apiUrl = 'http://xiapp.tradewindapps.com:9912/airports';

  constructor(private http: HttpClient) {}

  getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(this.apiUrl, httpOptions);
  }
}
