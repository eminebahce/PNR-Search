import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingDataService, MainType } from '../../services/booking-data.service';

@Component({
    selector: 'app-flight-details',
    templateUrl: './flight-details.component.html',
    styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {

    showViewMore: boolean = false;
    bookingData!: MainType;
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
    flightTypeText!: string[];

    constructor(private route: ActivatedRoute, private bookingDataService: BookingDataService) { }

    ngOnInit(): void {
            this.route.queryParams.subscribe(async (params) => {
            this.bookingData = await this.bookingDataService.findBooking(params.bookingCode, params.familyName);

            this.passengerName = this.bookingData.passengers.firstName;
            this.passengerLastName = this.bookingData.passengers.lastName;
            this.passengerTitle = this.bookingData.passengers.title.name;
            this.bookingCode = this.bookingData.bookingCode;

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