'use strict';

var bodyParser = require('body-parser');
var compress = require('compression');
var config = require('config');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var logger = require('./src/resources/logger')
  .create({ module: 'server' });

var root = require('./src/routes/root');
var sitemap = require('./src/routes/sitemap');
var robotsTxt = require('./src/routes/robotstxt');
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

var oneDay = 86400000;
app.use(express.static(path.join(__dirname, './src/static'), {
  maxAge: oneDay,
  lastModified: true,
  etag: true
}));
app.use(favicon(__dirname + '/src/static/assets/images/favicon.ico'));

/*
  Routes
 */
app.use('/sitemap.xml', sitemap);
app.use('/robots.txt', robotsTxt);
app.use('/api/sendemail', apiSendemail);
app.use('/api/references', apiReferences);
app.use('/', root);

/*
  Logger
 */
logger.info('server-starting', {
  config: config,
  env: process.env
});

/*
  Server
 */
var http = app.listen(config.httpPort, function () {
  var port = http.address().port;
  logger.info('server-started', {
    port: port
  });
});
