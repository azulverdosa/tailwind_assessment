import { Component, Input } from '@angular/core';
import { Airport } from '../airports/airport.types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport.details.component.html',
  styleUrls: ['./airport.details.component.css'],
})
export class AirportDetailsComponent {
  @Input() airport: Airport;
  faTimes = faTimes;

  onClick() {
    console.log('Do something');
  }
}
