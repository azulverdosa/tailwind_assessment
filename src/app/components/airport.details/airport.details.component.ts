import { Component, Input, OnInit } from '@angular/core';
import { Airport } from '../airports/airport.types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport.details.component.html',
  styleUrls: ['./airport.details.component.css'],
})
export class AirportDetailsComponent implements OnInit {
  @Input() airport: Airport;
  faTimes = faTimes;

  constructor() {}
  ngOnInit(): void {}

  onClick() {
    console.log('Do something');
  }
}
