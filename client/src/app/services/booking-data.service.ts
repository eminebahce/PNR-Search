import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';

export interface Title {
  code: string;
  name: string;
}

export interface Passengers {
  id: number;
  firstName: string;
  lastName: string;
  title: Title
}

export interface Equipment {
  code: string;
  name: string;
}

export interface Cabin {
  code: string;
  name: string;
}

export interface ArrivalTerminal {
  name: string;
}

export interface Carrier {
  code: string;
  name: string;
}

export interface OperatingFlight {
  number: string;
  duration: string;
  flown: boolean;
  checkInStart: string;
  localCheckInStart: string;
  checkInEnd: string;
  localCheckInEnd: string;
  scheduledArrival: string;
  localScheduledArrival: string;
  scheduledDeparture: string;
  localScheduledDeparture: string;
  equipment: Equipment;
  cabin: Cabin;
  arrivalTerminal: ArrivalTerminal;
  carrier: Carrier;
}

export interface SellingClass {
  code: string;
}

export interface Status {
  code: string;
  name: string;
}

export interface MarketingFlight {
  number: string;
  numberOfStops: number;
  operatingFlight: OperatingFlight;
  sellingClass: SellingClass;
  status: Status;
  carrier: Carrier;
}

export interface Country {
  code: string;
  name: string;
}

export interface City {
  IATACode: string;
  name: string;
  country: Country;
}

export interface ArriveOn {
  IATACode: string;
  name: string;
  city: City;
}

export interface DepartFrom {
  IATACode: string;
  name: string;
  city: City;
}

export interface Segments {
  id: number;
  type: string;
  informational: boolean;
  marketingFlight: MarketingFlight;
  arriveOn: ArriveOn;
  departFrom: DepartFrom;
}

export interface Destination {
  IATACode: string;
  name: string;
  city: City;
}

export interface Origin {
  IATACode: string;
  name: string;
  city: City;
}

export interface Connections {
  id: number;
  duration: string;
  segments: Segments[];
  destination: Destination;
  origin: Origin;
}

export interface Itinerary {
  type: string;
  connections: Connections[];
}

export interface ContactDetails {
  class: string;
  address: string;
}

export interface MainType {
  bookingCode: string;
  passengers: Passengers;
  itinerary: Itinerary;
  contactDetails: ContactDetails[];
}

export interface Passenger {
  bookingCode: string;
  passengers: Passengers;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private findBookingQuery: QueryRef<{ mainData: MainType }, { code: string, family: string }>;
  private findPassengerQuery: QueryRef<{ mainData: Passenger }, { code: string, family: string }>;

  constructor(private apollo: Apollo) {
    this.findBookingQuery = this.apollo.watchQuery({
      query: gql`query MainType($code: String!, $family: String!) {
        mainData(bookingCode: $code, lastName: $family) {
          bookingCode
          contactDetails {
            class
            address
          }
          itinerary {
            type
            connections {
              id
              duration
              origin {
                IATACode
                name
                city {
                  IATACode
                  name
                  country {
                    code
                    name
                  }
                }
              }
              destination {
                IATACode
                name
                city {
                  IATACode
                  name
                  country {
                    code
                    name
                  }
                }
              }
              segments {
                id
                type
                informational
                departFrom {
                  IATACode
                  name
                  city {
                    IATACode
                    name
                    country {
                      code
                      name
                    }
                  }
                }
                arriveOn {
                  IATACode
                  name
                  city {
                    IATACode
                    name
                    country {
                      code
                      name
                    }
                  }
                }
                marketingFlight {
                  number
                  carrier {
                    code
                    name
                  }
                  status {
                    code
                    name
                  }
                  numberOfStops
                  sellingClass {
                    code
                  }
                  operatingFlight {
                    number
                    carrier {
                      code
                      name
                    }
                    duration
                    flown
                    checkInStart
                    localCheckInStart
                    checkInEnd
                    localCheckInEnd
                    scheduledArrival
                    localScheduledArrival
                    scheduledDeparture
                    localScheduledDeparture
                    arrivalTerminal {
                      name
                    }
                    cabin {
                      code
                      name
                    }
                    equipment {
                      code
                      name
                    }
                  }
                }
              }
            }
          }
          passengers {
            id
            firstName
            lastName
            title {
              code
              name
            }
          }
        }
      }`
    });

    this.findPassengerQuery = this.apollo.watchQuery({
      query: gql`query MainType($code: String!, $family: String!) {
        mainData(bookingCode: $code, lastName: $family) {
          bookingCode
          passengers {
            id
            firstName
            lastName
          }
        }
      }`
    });
  }

  async findBooking(code: string, family: string): Promise<MainType> {
    const result = await this.findBookingQuery.refetch({ code, family });
    return result.data.mainData;
  }

  async findPassenger(code: string, family: string): Promise<Passenger> {
    const result = await this.findPassengerQuery.refetch({ code, family });
    return result.data.mainData;
  }
}