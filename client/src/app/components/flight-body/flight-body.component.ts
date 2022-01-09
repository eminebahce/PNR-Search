import { Component, OnInit, Input } from '@angular/core';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-flight-body',
    templateUrl: './flight-body.component.html',
    styleUrls: ['./flight-body.component.scss']
})
export class FlightBodyComponent implements OnInit {

    @Input() bookingData: any;

    faPlaneDeparture = faPlaneDeparture;
    faPlane = faPlane;
    faInfoCircle = faInfoCircle;
    showModal!: boolean

    flightType!: string;
    originCityName!: string;
    destinationCityName!: string;
    flightCode!: string;
    originIATACode!: string;
    destinationIATACode!: string;
    scheduledDepartureDate!: string;
    
    originAirport!: string;
    destinationAirport!: string;
    originCountry!: string;
    destinationCountry!: string;
    flightStatus!: string;
    numberOfStops!: number;
    cabinType!: string;
    seatNumber!: string
    planeType!: string;

    constructor() { }

    ngOnInit(): void {
            const flightTypeText = this.bookingData.itinerary.type.split('_');
            this.flightType = flightTypeText[0] + " " + flightTypeText[1];
            this.originCityName = this.bookingData.itinerary.connections[0].origin.city.name;
            this.destinationCityName = this.bookingData.itinerary.connections[0].destination.city.name;
            this.flightCode = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.carrier.code + this.bookingData.itinerary.connections[0].segments[0].marketingFlight.number;
            this.originIATACode = this.bookingData.itinerary.connections[0].origin.IATACode;
            this.destinationIATACode = this.bookingData.itinerary.connections[0].destination.IATACode;
            this.scheduledDepartureDate = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.localScheduledDeparture;
        
            this.originCountry = this.bookingData.itinerary.connections[0].origin.city.country.name;
            this.destinationCountry = this.bookingData.itinerary.connections[0].destination.city.country.name;
            this.originAirport = this.bookingData.itinerary.connections[0].origin.name;
            this.destinationAirport = this.bookingData.itinerary.connections[0].destination.name;
            this.flightStatus = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.status.name;
            this.numberOfStops = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.numberOfStops;
            this.cabinType = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.cabin.name;
            this.seatNumber = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.cabin.code;
            this.planeType = this.bookingData.itinerary.connections[0].segments[0].marketingFlight.operatingFlight.equipment.name;
    }

    showModalToggle() {
        this.showModal = !this.showModal;
    }

}
