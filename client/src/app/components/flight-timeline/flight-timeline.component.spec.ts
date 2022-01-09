import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTimelineComponent } from './flight-timeline.component';

describe('FlightTimelineComponent', () => {
  let component: FlightTimelineComponent;
  let fixture: ComponentFixture<FlightTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
