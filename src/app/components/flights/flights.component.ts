import { Component, OnInit } from '@angular/core';

import { Flight } from './flight.types';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  //assign as property of component
  flights: Flight[] = [];

  //add FlightService as provider
  constructor(private flightService: FlightsService) {}

  ngOnInit(): void {
    //subscribe to Observable
    this.flightService.getFlights().subscribe((flights) => {
      this.flights = flights;
    });
  }
}
