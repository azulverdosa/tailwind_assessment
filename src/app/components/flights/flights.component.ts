import { Component, OnInit } from '@angular/core';

import { Flight } from './flight.types';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  flights: Flight[] = [];

  constructor(private flightService: FlightsService) {}

  ngOnInit(): void {
    this.flightService.getFlights().subscribe((flights) => {
      this.flights = flights;
    });
  }
}
