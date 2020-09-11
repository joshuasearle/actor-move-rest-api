const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routers/router');

const app = express();

// Add post request url decoding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect requests to router
app.use('/', router);

// Connect to Db, and start server
const url = 'mongodb://localhost:27017/fit2095';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Database connected, server listening.');
  app.listen(8080);
});
