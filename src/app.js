const express = require('express');
const connectDB = require('./config/db');
const graphqlServer = require('./graphql');


const app = express();

//connect database
connectDB();

app.use('graphql', graphqlServer);

module.exports = app;