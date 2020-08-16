// require/import all the things
const express = require('express');
require('dotenv').config();
const cors = require('cors');

const config = require('./config');
const db = require('./db');

// define the app/server/whatever
const server = express();

// start db connection
db();

// Middleware goes here

// use cors if needed
server.use(cors());
// use express json parser because body-parser sucks
server.use(express.json());

// import your DAO things
const Events = require('./api/events/events.dao');


// import what is essential our router factory function
const routerFactory = require('./api/router');

// Route
server.use('/', routerFactory(Events));


// get constants from my settings file
let { PORT, dbName } = require("./config");

// Listener
server.listen(PORT, (err) =>
{
    if (err)
    {
        console.log('There was an error starting server: ', err);
    }
    console.log(`${dbName} is listening on port ${PORT}...`);
});

// Logger
const requestLogger = (req, res, next) =>
{
        const now = new Date();
        console.log(`${now}:::> Incoming ${req.method} request to ${PORT}.`)
        next();
}
server.use(requestLogger);