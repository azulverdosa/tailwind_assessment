import { Component, Input, AfterViewInit } from '@angular/core';
import { Airport } from '../airports/airport.types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport.details.component.html',
  styleUrls: ['./airport.details.component.css'],
})
export class AirportDetailsComponent implements AfterViewInit {
  @Input() airport: Airport;
  faTimes = faTimes;

  onClick() {
    console.log('Do something');
  }

  ngAfterViewInit(): void {
    console.log('this.airport :>> ', this.airport);
  }
}
