import { Component, OnInit, Input } from '@angular/core';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flight-body',
  templateUrl: './flight-body.component.html',
  styleUrls: ['./flight-body.component.scss']
})
export class FlightBodyComponent implements OnInit {

  faPlaneDeparture = faPlaneDeparture;
  faPlane = faPlane;

  @Input() bookingData: any;
  @Input() flightType!: string;
  @Input() originCityName!: string;
  @Input() destinationCityName!: string;
  @Input() flightCode!: string;
  @Input() originIATACode!: string;
  @Input() destinationIATACode!: string;
  @Input() scheduledDepartureDate!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
