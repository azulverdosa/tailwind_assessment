import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MarkerService } from './services/marker.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AirportsComponent } from './components/airports/airports.component';
import { AirportDetailsComponent } from './components/airport.details/airport.details.component';
import { MapComponent } from './components/map/map.component';
import { FlightsComponent } from './components/flights/flights.component';
import { UpcomingFlightDetailsComponent } from './components/upcoming-flight-details/upcoming-flight-details.component';
import { CurrentFlightDetailsComponent } from './components/current-flight-details/current-flight-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AirportsComponent,
    AirportDetailsComponent,
    MapComponent,
    FlightsComponent,
    UpcomingFlightDetailsComponent,
    CurrentFlightDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    LeafletModule,
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
