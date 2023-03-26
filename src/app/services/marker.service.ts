import { Injectable } from '@angular/core';

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
  flights: Flight[] = [];
  airports: Airport[] = [];

  constructor(
    private flightService: FlightsService,
    private airportService: AirportsService
  ) {}

  plotFlightMarkers(map: Leaflet.Map | Leaflet.LayerGroup<any>): void {
    this.flightService.getFlights().subscribe((flights) => {
      this.flights = flights;
      for (const flight of flights) {
        if (flight.longitude && flight.latitude) {
          const long = flight.longitude;
          const lat = flight.latitude;

          const circle = Leaflet.circleMarker([lat, long], {
            radius: 3,
          }).setStyle({
            color: 'green',
          });

          circle.addTo(map);
        } else {
          // TODO: I understand that the longitude and latitude information could be null for different reasons, but I'm not sure how to handle the flight when this happens. I would need more information - emailed to ask
        }
      }

      return flights;
    });
  }

  plotAirportMarkers(map: Leaflet.Map | Leaflet.LayerGroup<any>): void {
    this.airportService.getAirports().subscribe((airports) => {
      this.airports = airports;
      for (const airport of airports) {
        {
          const long = airport.longitude;
          const lat = airport.latitude;

          const marker = Leaflet.marker([lat, long]);

          marker.addTo(map);
        }
      }
      return airports;
    });
  }

  plotCapitalMarkers(map: Leaflet.Map | Leaflet.LayerGroup<any>): void {
    try {
      for (const cap of CAPITALS) {
        const long = cap.longitude;
        const lat = cap.latitude;

        const circle = Leaflet.circleMarker([lat, long], { radius: 0 });

        circle.addTo(map);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
