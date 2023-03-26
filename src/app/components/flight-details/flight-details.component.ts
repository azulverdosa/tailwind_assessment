import { Component, Input, AfterViewInit } from '@angular/core';

import { Flight } from '../flights/flight.types';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent {
  @Input() flight: Flight;
  faCoffee = faCoffee;

  ngAfterViewInit(): void {}
}
