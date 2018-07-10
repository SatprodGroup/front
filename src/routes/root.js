'use strict';

var express = require('express');
var router = express.Router();

router.get('/*',function(req,res,next){
  if (!process.env.LOCAL_DEV) {
    res.header('Content-Security-Policy' , 'default-src \'self\' data: gap: https://ssl.gstatic.com \'unsafe-eval\'; style-src \'self\' https://fonts.googleapis.com \'unsafe-inline\';script-src \'self\' https://www.googletagmanager.com https://www.google-analytics.com \'unsafe-inline\' \'unsafe-eval\'; font-src \'self\' https://fonts.googleapis.com https://fonts.gstatic.com');
    res.header('Referrer-Policy' , 'same-origin');
    res.header('X-Frame-Options' , 'SAMEORIGIN');
    res.header('X-Xss-Protection' , '1; mode=block');
    res.header('X-Content-Type-Options' , 'nosniff');
  }
  next();
});

router.get('/*', function (req, res) {
  res.render('index');
});

router.get('*', function(req, res){
  res.send('what???', 404);
});

module.exports = router;
