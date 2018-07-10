'use strict';

var sitemap = require('sitemap');
var express = require('express');
var router = express.Router();

var sm = sitemap.createSitemap({
  hostname: '//satprod.net',
  cacheTime: 1000 * 60 * 24
});

router.get('/', function (req, res) {
  if (sm.isCacheValid()) {
    sm.toXML(function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  } else {
    sm.urls = [];

    sm.add({
      url: 'https://satprod.net/',
      changefreq: 'monthly'
    });

    sm.add({
      url: 'https://satprod.net/contact',
      changefreq: 'monthly'
    });

    sm.toXML(function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  }
});

module.exports = router;
