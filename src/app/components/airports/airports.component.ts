import { Component, OnInit } from '@angular/core';
import { Airport } from './airport.types';
import { AIRPORTS } from 'src/app/airportsData';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css'],
})
export class AirportsComponent implements OnInit {
  airports: Airport[] = AIRPORTS;

  constructor() {}
  ngOnInit(): void {}
}
