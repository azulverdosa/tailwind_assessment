import { Component, Input } from '@angular/core';

import { Flight } from '../flights/flight.types';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-current-flight-details',
  templateUrl: './current-flight-details.component.html',
  styleUrls: ['./current-flight-details.component.css'],
})
export class CurrentFlightDetailsComponent {
  @Input() flight: Flight;
  faCoffee = faCoffee;

  ngAfterViewInit(): void {}
}
