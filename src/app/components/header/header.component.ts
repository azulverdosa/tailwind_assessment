import { Component } from '@angular/core';
import {
  faLocationDot,
  faCircle,
  faDotCircle,
  // faPlaneUp,
  // faPlane,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Tailwind';
  pin = faLocationDot;
  circle = faCircle;
  dotCircle = faDotCircle;
  //TODO use fontawesome as plane icons
  // plane = faPlane;
  // planeUp = faPlaneUp;

  updateTimerSelect() {
    console.log('Refresh for automatic update');
  }
}
