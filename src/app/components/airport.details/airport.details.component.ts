import { Component, Input, OnInit } from '@angular/core';
import { Airport } from '../airports/airport.types';

@Component({
  selector: 'app-airport-details',
  templateUrl: './airport.details.component.html',
  styleUrls: ['./airport.details.component.css'],
})
export class AirportDetailsComponent implements OnInit {
  @Input() airport: Airport;

  constructor() {}
  ngOnInit(): void {}
}
