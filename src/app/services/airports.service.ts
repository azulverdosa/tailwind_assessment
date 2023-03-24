import { Injectable } from '@angular/core';
import { Airport } from '../components/airports/airport.types';
import { AIRPORTS } from 'src/app/airportsData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  constructor() {}

  getAirports(): Observable<Airport[]> {
    //turns AIRPORTS into an observable
    const airports = of(AIRPORTS);
    return airports;
  }
}
