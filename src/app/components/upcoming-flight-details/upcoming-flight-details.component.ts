import { Component, Input, AfterViewInit } from '@angular/core';

import { Flight } from '../flights/flight.types';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upcoming-flight-details',
  templateUrl: './upcoming-flight-details.component.html',
  styleUrls: ['./upcoming-flight-details.component.css'],
})
export class UpcomingFlightDetailsComponent {
  @Input() flight: Flight;
  faCoffee = faCoffee;

  ngAfterViewInit(): void {}
}
