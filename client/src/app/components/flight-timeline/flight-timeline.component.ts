import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-timeline',
  templateUrl: './flight-timeline.component.html',
  styleUrls: ['./flight-timeline.component.scss'],
})
export class FlightTimelineComponent implements OnInit {

  @Input() flightDuration!: number;
  @Input() checkInStartTime!: string;
  @Input() checkInEndTime!: string;
  @Input() scheduledArrival!: string;
  @Input() scheduledDeparture!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
