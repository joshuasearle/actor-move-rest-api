const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Add post request url decoding
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to Db, and start server
const url = 'mongodb://localhost:27017/fit2095';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Database connected, server listening.');
  app.listen(8080);
});
