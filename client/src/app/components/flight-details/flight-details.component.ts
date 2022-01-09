import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService, MainType } from '../../services/booking-data.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

 showViewMore: boolean = false;
  bookingData: MainType | undefined;
  passengerName!: string;
  passengerLastName!: string;
  passengerTitle!: string;
  bookingCode!: string;

  flightType!: string;
  originCityName!: string;
  destinationCityName!: string;
  flightCode!: string;
  originIATACode!: string;
  destinationIATACode!: string;
  scheduledDepartureDate!: string;

  flightDuration!: number;
  checkInStartTime!: string;
  checkInEndTime!: string;
  scheduledArrival!: string;
  scheduledDeparture!: string;

  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      this.bookingData = await this.bookingService.findBooking(params.bookingCode, params.familyName);

      this.passengerName = this.bookingData.passengers.firstName;
      this.passengerLastName = this.bookingData.passengers.lastName;
      this.passengerTitle = this.bookingData.passengers.title.name;
      this.bookingCode = this.bookingData.bookingCode;

      this.flightType = this.bookingData.itinerary.type;
      this.originCityName = this.bookingData.itinerary.connections[0].origin.city.name;
      this.destinationCityName = this.bookingData.itinerary.connections[0].destination.city.name;
      this.flightCode = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.carrier.code + this.bookingData.itinerary.connections[0].segments[0].marketingFlight.number;
      this.originIATACode = this.bookingData.itinerary.connections[0].origin.IATACode;
      this.destinationIATACode = this.bookingData.itinerary.connections[0].destination.IATACode;
      this.scheduledDepartureDate = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.localScheduledDeparture;

      this.flightDuration = Number(this.bookingData.itinerary.connections[0].duration) / 60;
      this.checkInStartTime = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.localCheckInStart;
      this.checkInEndTime = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.localCheckInEnd;
      this.scheduledArrival = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.localScheduledArrival;
      this.scheduledDeparture = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.localScheduledDeparture;
    });
  }

  showMore() {
    this.showViewMore = !this.showViewMore;
  }

}
