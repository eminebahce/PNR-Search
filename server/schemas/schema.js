const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema, GraphQLString } = graphql;
const passengerData = require("../mock.json");
const MainType = require("./types/MainType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    mainData: {
      type: MainType,
      args: {
        bookingCode: { type: GraphQLString },
        lastName: { type: GraphQLString },
      },
      resolve(parent, args) {
        if (
          passengerData.bookingCode === args.bookingCode &&
          passengerData.passengers.lastName === args.lastName
        ) {
          return passengerData;
        }
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
