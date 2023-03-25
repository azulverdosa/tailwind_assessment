import { Component, Input } from '@angular/core';

import { Flight } from '../flights/flight.types';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent {
  //declare flight input to access each individual flight
  @Input() flight: Flight;
  //set icon as a prop
  faCoffee = faCoffee;
}
