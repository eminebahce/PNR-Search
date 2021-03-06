const express = require("express");
const app = express();
const PORT = 7000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/schema");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running");
});
