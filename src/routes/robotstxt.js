var express = require('express');
var router = express.Router();

var robotsTxt = 'User-agent: *\nDisallow:\nSitemap: https://satprod.net/sitemap.xml';

router.get('/', function(req, res) {
  res.header('Content-Type', 'text/plain');
  res.send(robotsTxt);
});'use strict';

module.exports = router;
