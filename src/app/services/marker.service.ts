import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CAPITALS } from '../mock_data/capital_cities';
import { Flight } from '../components/flights/flight.types';
import { FlightsService } from 'src/app/services/flights.service';
import { Airport } from '../components/airports/airport.types';
import { AirportsService } from './airports.service';

import * as Leaflet from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  //assign as property of component
  flights: Flight[] = [];
  airports: Airport[] = [];

  //add providers
  constructor(
    // private http: HttpClient,
    private flightService: FlightsService,
    private airportService: AirportsService
  ) {}

  plotFlightMarkers(map: Leaflet.Map | Leaflet.LayerGroup<any>): void {
    this.flightService.getFlights().subscribe((flights) => {
      this.flights = flights;
      for (const flight of flights) {
        //TODO help with this conditional
        if (flight.longitude && flight.latitude) {
          const long = flight.longitude;
          const lat = flight.latitude;

          const circle = Leaflet.circleMarker([lat, long], {
            radius: 3,
          }).setStyle({
            color: 'green',
          });

          circle.addTo(map);
        }
      }
      console.log('marker.service.ts', flights);
    });
  }

  plotAirportMarkers(map: Leaflet.Map | Leaflet.LayerGroup<any>): void {
    this.airportService.getAirports().subscribe((airports) => {
      this.airports = airports;
      for (const airport of airports) {
        {
          const code = airport.icao;
          const long = airport.longitude;
          const lat = airport.latitude;
          const name = airport.name;

          const marker = Leaflet.marker([lat, long]);

          marker.addTo(map);
        }
      }
      console.log('marker.service.ts', airports);
    });
  }

  plotCapitalMarkers(map: Leaflet.Map | Leaflet.LayerGroup<any>): void {
    for (const cap of CAPITALS) {
      const long = cap.longitude;
      const lat = cap.latitude;

      const circle = Leaflet.circleMarker([lat, long], { radius: 0 });

      circle.addTo(map);
    }
  }
}
