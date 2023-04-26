import { Component, Input } from '@angular/core';

import { Flight } from '../flights/flight.types';
import { Airport } from '../airports/airport.types';
import { MarkerService } from 'src/app/services/marker.service';

@Component({
  selector: 'app-current-flight-details',
  templateUrl: './current-flight-details.component.html',
  styleUrls: ['./current-flight-details.component.css'],
})
export class CurrentFlightDetailsComponent {
  @Input() flight: Flight;
  @Input() airport: Airport;

  constructor(private markerService: MarkerService) {}

  onClickFlightDetails() {
    console.log(
      'this.flights :>> ',
      this.markerService.flightMarkers[this.flight.flightNumber]?.openPopup()
    );
  }

  onClickAirportDetails(icao: string) {
    console.log(
      'this.flights :>> ',
      this.markerService.airportMarkers[icao]?.openPopup()
    );
  }

  ngAfterViewInit(): void {}
}
