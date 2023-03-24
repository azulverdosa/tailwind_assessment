import { Component, OnInit } from '@angular/core';
import { AirportsService } from 'src/app/services/airports.service';
import { Airport } from './airport.types';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css'],
})
export class AirportsComponent implements OnInit {
  airports: Airport[] = [];

  //add service as provider into constructor
  constructor(private airportService: AirportsService) {}

  ngOnInit(): void {
    //ngOnInit executes on initial load
    //subscribe to the Observable
    this.airportService.getAirports().subscribe((airports) => {
      this.airports = airports;
    });
  }
}
