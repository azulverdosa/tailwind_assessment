import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFlightDetailsComponent } from './current-flight-details.component';

describe('CurrentFlightDetailsComponent', () => {
  let component: CurrentFlightDetailsComponent;
  let fixture: ComponentFixture<CurrentFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentFlightDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
