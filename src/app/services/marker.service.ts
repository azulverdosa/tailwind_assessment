import { Injectable } from '@angular/core';

import { CAPITALS } from '../mock_data/capital_cities';
import { Flight } from '../components/flights/flight.types';
import { FlightsService } from 'src/app/services/flights.service';
import { Airport } from '../components/airports/airport.types';
import { AirportsService } from './airports.service';

// import { faPlane } from '@fortawesome/free-solid-svg-icons';

import * as Leaflet from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  flightMarkers: Record<string, Leaflet.Marker> = {};
  airportMarkers: Record<string, Leaflet.Marker> = {};

  constructor(
    private flightService: FlightsService,
    private airportService: AirportsService
  ) {}

  plotFlightMarkers(map: Leaflet.Map | Leaflet.LayerGroup<any>): void {
    const planeMarker = Leaflet.icon({
      iconUrl:
        'https://icones.pro/wp-content/uploads/2021/08/symbole-d-avion-et-de-voyage-vert.png',
      iconSize: [31, 26], // size of the icon
      iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -45], // point from which the popup should open relative to the iconAnchor
    });

    this.flightService.getFlights().subscribe((flights) => {
      for (const flight of flights) {
        if (flight.longitude && flight.latitude) {
          const long = flight.longitude;
          const lat = flight.latitude;

          const marker = Leaflet.marker([lat, long], {
            icon: planeMarker,
          });

          marker.addTo(map).bindPopup(flight.flightNumber);

          this.flightMarkers[flight.flightNumber] = marker;
        } else {
          // TODO: I understand that the longitude and latitude information could be null for different reasons, but I'm not sure how to handle the flight when this happens. I would need more information - emailed to ask
        }
      }

      return flights;
    });
  }

  plotAirportMarkers(map: Leaflet.Map | Leaflet.LayerGroup<any>): void {
    this.airportService.getAirports().subscribe((airports) => {
      for (const airport of airports) {
        {
          const long = airport.longitude;
          const lat = airport.latitude;

          const marker = Leaflet.marker([lat, long]);

          marker.addTo(map).bindPopup(airport.name);

          this.airportMarkers[airport.icao] = marker;
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

        // const capitalPopup = Leaflet.popup().setContent(cap.name);
        const circle = Leaflet.circleMarker([lat, long], { radius: 3 });

        circle.addTo(map).bindPopup(cap.name);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
