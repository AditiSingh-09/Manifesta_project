const express = require('express');
const cors = require('cors');
const app = express();
const pool = require("./db");

//middleware
app.use(cors({
  origin: 'https://manifesta-project.vercel.app/',
  credentials: true,
}));
app.use(express.json());

// Route Middleware
app.use('/users', require('./routes/users'));
app.use('/clubs', require('./routes/clubs'));
app.use('/events', require('./routes/events'));
app.use('/club-members', require('./routes/clubMembers'));
app.use('/registrations', require('./routes/registrations'));

module.exports = app;
