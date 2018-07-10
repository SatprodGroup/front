'use strict';

var express = require('express');
var router = express.Router();

router.get('/*',function(req,res,next){
    res.header('Content-Security-Policy' , 'default-src https: data: \'unsafe-inline\' \'unsafe-eval\'');
    res.header('X-Frame-Options' , 'SAMEORIGIN');
    res.header('X-Xss-Protection' , '1; mode=block');
    res.header('X-Content-Type-Options' , 'nosniff');
    next();
});

router.get('/*', function (req, res) {
  res.render('index');
});

module.exports = router;
