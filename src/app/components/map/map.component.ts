import { Component, AfterViewInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { MarkerService } from '../../services/marker.service';

const iconDefault = Leaflet.icon({
  iconRetinaUrl: 'assets/marker-icon-2x.png',
  iconUrl: 'assets/marker-icon.png',
  shadowUrl: 'assets/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
Leaflet.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  //TODO: abstract type into a shared types file, and reuse it where needed
  private map: Leaflet.Map | Leaflet.LayerGroup<any>;

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [57.6282, -93.5795],
      zoom: 4.1,
    });

    const tiles = Leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  private loadFlights() {
    this.markerService.plotFlightMarkers(this.map);
    // TODO automatically update map after xx seconds - need to figure out how to clear perviously plotted marker

    // setInterval(() => {
    //   this.markerService.plotFlightMarkers(this.map);
    // }, 5000);
    // TODO: make interval selectable through UI?
  }

  private loadLandmarks() {
    const airports = this.markerService.plotAirportMarkers(this.map);
    this.markerService.plotCapitalMarkers(this.map);
  }

  constructor(private markerService: MarkerService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.loadFlights();
    this.loadLandmarks();
  }
}
