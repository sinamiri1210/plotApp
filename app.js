'use strict'

const express = require('express');
const exphbs = require('express-handlebars');
const browserify = require('browserify-middleware');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const api = require('./routes/api');

const app = express();

// view engine setup
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.get('/javascripts/indexScript.js', browserify('./client/indexScript.js'));
app.get('/javascripts/sstScript.js', browserify('./client/sstScript.js'));
app.get('/javascripts/scatterScript.js', browserify('./client/scatterScript.js'));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send error
  res.status(err.status || 500);
  console.log(err);
  res.send('error');
});

module.exports = app;
