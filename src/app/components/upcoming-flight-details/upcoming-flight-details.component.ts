import { Component, Input, AfterViewInit } from '@angular/core';

import { Flight } from '../flights/flight.types';
import { Airport } from '../airports/airport.types';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-upcoming-flight-details',
  templateUrl: './upcoming-flight-details.component.html',
  styleUrls: ['./upcoming-flight-details.component.css'],
})
export class UpcomingFlightDetailsComponent {
  @Input() flight: Flight;
  @Input() airport: Airport;

  constructor(private markerService: MarkerService) {}

  onClickFlightDetails() {
    this.markerService.flightMarkers[this.flight.flightNumber]?.openPopup();
  }

  onClickAirportDetails(icao: string) {
    this.markerService.airportMarkers[icao]?.openPopup();
  }

  ngAfterViewInit(): void {}
}
