const express = require('express');
const connectDB = require('./config/db');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema/typeDefs');
const resolvers  = require('./graphql/resolvers/index');


const app = express();

//connect database
connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers
})

async function startServer() {
    await server.start();
    server.applyMiddleware({app});
}

startServer();

module.exports = app;