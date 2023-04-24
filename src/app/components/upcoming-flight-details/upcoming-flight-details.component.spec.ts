import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingFlightDetailsComponent } from './upcoming-flight-details.component';

describe('UpcomingFlightDetailsComponent', () => {
  let component: UpcomingFlightDetailsComponent;
  let fixture: ComponentFixture<UpcomingFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpcomingFlightDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
