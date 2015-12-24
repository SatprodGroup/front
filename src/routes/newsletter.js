'use strict';

var express        = require('express');
var config         = require('config');

var router         = express.Router();
var mailChimp      = require('../resources/mailchimp');
var errorsHandler  = require('./fixtures/errorsHandler');

var listID = config.mailchimp.newsletterListId;

router.post('/subscribe', function (req, res) {

  mailChimp.listSubscribe({
    id: listID,
    email_address: req.body.email,
    double_optin: false
  }, function (error, data) {
    if (error) {
      var response = null;
      var responseCode = null;
      if (error.code === 214) {
        response = {
          success : false,
          already: true,
          error: error
        };
        responseCode = 400;
        errorsHandler(req.body.email + ' already subscribed');
      } else {
        responseCode = 500;
        response = errorsHandler(error);
      }

      return res.status(responseCode).json(response);

    } else {

      return res.status(200).json({
        success : data
      });
    }
  });
});

module.exports = router;
