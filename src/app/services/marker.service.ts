import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

const data = [
  {
    icao: 'CYYZ',
    latitude: 43.676667,
    longitude: -79.630556,
    name: 'Toronto Pearson International Airport',
  },
  {
    icao: 'CYVR',
    latitude: 49.194722,
    longitude: -123.183889,
    name: 'Vancouver International Airport',
  },
  {
    icao: 'CYYC',
    latitude: 51.1225,
    longitude: -114.013333,
    name: 'Calgary International Airport',
  },
  {
    icao: 'CYOW',
    latitude: 45.3225,
    longitude: -75.667222,
    name: 'Ottawa Macdonald-Cartier International Airport',
  },
  {
    icao: 'CYEG',
    latitude: 53.31,
    longitude: -113.579444,
    name: 'Edmonton International Airport',
  },
  {
    icao: 'CYHZ',
    latitude: 44.879722,
    longitude: -63.510278,
    name: 'Halifax Stanfield International Airport',
  },
];

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient) {}

  plotAirportMarkers(map: L.Map | L.LayerGroup<any>): void {
    for (const airport of data) {
      const code = airport.icao;
      const long = airport.longitude;
      const lat = airport.latitude;
      const name = airport.name;

      const marker = L.marker([lat, long]);

      marker.addTo(map);
    }

    // this.http.get(this.capitals).subscribe((res: any) => {
    // for (const c of res.features) {
    //   const lon = c.geometry.coordinates[0];
    //   const lat = c.geometry.coordinates[1];
    //   const marker = L.marker([lat, lon]);

    //   marker.addTo(map);
    // }
    // });
  }
}
