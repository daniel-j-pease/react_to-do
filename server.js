'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const logger      = require('morgan');
const path        = require('path');
const favicon     = require('serve-favicon');

const isDev       = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app         = express();

app.use(logger(isDev ? 'dev' : 'common'));
app.use(bodyParser.json());
app.use(favicon(__dirname + '/public/images/favicon.ico'));

const PORT = process.argv[2] || process.env.PORT || 3000;

const indexRoute   = require('./routes/index');
const tasksRoute   = require('./routes/tasks');

app.use('/', indexRoute);
app.use('/tasks', tasksRoute);

// generic error handling
app.use((err, req, res, next) => {
  res.status(500).send('Something broke!').end(next);
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));
