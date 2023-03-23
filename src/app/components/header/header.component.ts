import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Tailwind';

  constructor() {}
  ngOnInit(): void {}

  updateTimerSelect() {
    console.log('Time for automatic update');
  }
}
