import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

import { Flight } from '../components/flights/flight.types';

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
  private apiUrl = `${environment.API_URL}/currentflights`;

  constructor(private http: HttpClient) {}

  getFlights(): Observable<Flight[]> {
    return this.http
      .get<Flight[]>(this.apiUrl, httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
