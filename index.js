'use strict';

var bodyParser = require('body-parser');
var compress = require('compression');
var config = require('config');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var prerender = require('prerender-node');

/**
 *  Prerender
 */

var logger = require('./src/resources/logger');

var root = require('./src/routes/root');
var sitemap = require('./src/routes/sitemap');
var apiSendemail = require('./src/routes/api/apiSendEmail');
var apiReferences = require('./src/routes/api/apiReferences');

var app = express();

/*
  App Config
 */
app.use(compress());
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ reviver: true }));
app.use(express.static(path.join(__dirname, './src/static')));
app.use(prerender.set('prerenderToken', config.prerender.token));
app.use(favicon(__dirname + '/src/static/assets/images/favicon.ico'));

/*
  Routes
 */
app.use('/sitemap.xml', sitemap);
app.use('/api/sendemail', apiSendemail);
app.use('/api/references', apiReferences);
app.use('/', root);

/*
  WWW to now-WWW
 */
app.get('/*', function (req, res, next) {
  if (req.headers.host.match(/^www/) !== null) {
    res.redirect(301, 'http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();
  }
});

/**
 *  Force HTTPS
 */
app.get('/*', function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    res.redirect(301, 'https://' + req.headers.host + req.path);
  } else {
    next();
  }
});

/*
  Logger
 */
logger.info({
  config: config,
  state: 'starting server...'
});

/*
  Server
 */
var http = app.listen(config.httpPort, function () {
  var port = http.address().port;
  logger.info({
    port: port,
    state: 'http server started!'
  });
});

