const express = require("express");
const connectDB = require("./config/db");
const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { typeDefs, resolvers } = require("./modules");
const { User } = require("./model/userModel");

const app = express();

//connect database
connectDB();

let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  context: {
    models: {
      User,
    },
  },
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

module.exports = app;
