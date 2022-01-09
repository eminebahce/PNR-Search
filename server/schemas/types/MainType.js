const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} = graphql;

const Title = new GraphQLObjectType({
  name: "Title",
  fields: () => ({
    code: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const Passengers = new GraphQLObjectType({
  name: "Passengers",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    title: { type: Title },
  }),
});

const Equipment = new GraphQLObjectType({
  name: "Equipment",
  fields: () => ({
    code: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const Cabin = new GraphQLObjectType({
  name: "Cabin",
  fields: () => ({
    code: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const ArrivalTerminal = new GraphQLObjectType({
  name: "ArrivalTerminal",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});

const Carrier = new GraphQLObjectType({
  name: "Carrier",
  fields: () => ({
    code: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const OperatingFlight = new GraphQLObjectType({
  name: "OperatingFlight",
  fields: () => ({
    number: { type: GraphQLString },
    duration: { type: GraphQLString },
    flown: { type: GraphQLBoolean },
    checkInStart: { type: GraphQLString },
    localCheckInStart: { type: GraphQLString },
    checkInEnd: { type: GraphQLString },
    localCheckInEnd: { type: GraphQLString },
    scheduledArrival: { type: GraphQLString },
    localScheduledArrival: { type: GraphQLString },
    scheduledDeparture: { type: GraphQLString },
    localScheduledDeparture: { type: GraphQLString },
    equipment: { type: Equipment },
    cabin: { type: Cabin },
    arrivalTerminal: { type: ArrivalTerminal },
    carrier: { type: Carrier },
  }),
});

const SellingClass = new GraphQLObjectType({
  name: "SellingClass",
  fields: () => ({
    code: { type: GraphQLString },
  }),
});

const Status = new GraphQLObjectType({
  name: "Status",
  fields: () => ({
    code: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const MarketingFlight = new GraphQLObjectType({
  name: "MarketingFlight",
  fields: () => ({
    number: { type: GraphQLString },
    numberOfStops: { type: GraphQLInt },
    operatingFlight: { type: OperatingFlight },
    sellingClass: { type: SellingClass },
    status: { type: Status },
    carrier: { type: Carrier },
  }),
});

const Country = new GraphQLObjectType({
  name: "Country",
  fields: () => ({
    code: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const City = new GraphQLObjectType({
  name: "City",
  fields: () => ({
    IATACode: { type: GraphQLString },
    name: { type: GraphQLString },
    country: { type: Country },
  }),
});

const ArriveOn = new GraphQLObjectType({
  name: "ArriveOn",
  fields: () => ({
    IATACode: { type: GraphQLString },
    name: { type: GraphQLString },
    city: { type: City },
  }),
});

const DepartFrom = new GraphQLObjectType({
  name: "DepartFrom",
  fields: () => ({
    IATACode: { type: GraphQLString },
    name: { type: GraphQLString },
    city: { type: City },
  }),
});

const Segments = new GraphQLObjectType({
  name: "Segments",
  fields: () => ({
    id: { type: GraphQLInt },
    type: { type: GraphQLString },
    informational: { type: GraphQLBoolean },
    marketingFlight: { type: MarketingFlight },
    arriveOn: { type: ArriveOn },
    departFrom: { type: DepartFrom },
  }),
});

const Destination = new GraphQLObjectType({
  name: "Destination",
  fields: () => ({
    IATACode: { type: GraphQLString },
    name: { type: GraphQLString },
    city: { type: City },
  }),
});

const Origin = new GraphQLObjectType({
  name: "Origin",
  fields: () => ({
    IATACode: { type: GraphQLString },
    name: { type: GraphQLString },
    city: { type: City },
  }),
});

const Connections = new GraphQLObjectType({
  name: "Connections",
  fields: () => ({
    id: { type: GraphQLInt },
    duration: { type: GraphQLString },
    segments: { type: new GraphQLList(Segments) },
    destination: { type: Destination },
    origin: { type: Origin },
  }),
});

const Itinerary = new GraphQLObjectType({
  name: "Itinerary",
  fields: () => ({
    type: { type: GraphQLString },
    connections: { type: new GraphQLList(Connections) },
  }),
});

const ContactDetails = new GraphQLObjectType({
  name: "ContactDetails",
  fields: () => ({
    class: { type: GraphQLString },
    address: { type: GraphQLString },
  }),
});

const MainType = new GraphQLObjectType({
  name: "MainType",
  fields: () => ({
    bookingCode: { type: GraphQLString },
    passengers: { type: Passengers },
    itinerary: { type: Itinerary },
    contactDetails: { type: new GraphQLList(ContactDetails) },
  }),
});

module.exports = MainType;
