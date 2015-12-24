'use strict';

var express = require('express');
var router = express.Router();

var sendEmail = require('../../components/sendEmail');

var errorsHandler = require('../fixtures/errorsHandler');

/**
 * Post Message from contact form.
 */
router.post('/', function (req, res) {
  var email = req.body.email;
  var name = req.body.name;
  var message = req.body.message;
  var tag = req.body.tag;

  var mailOptions = {
    From: 'Satprod Group <info@satprod.net>',
    To: 'info@satprod.net',
    replyTo: email,
    Subject: name + ' leaves you a message',
    TextBody: 'expeditor : ' + name + ' (' + email + ')\nmessage : ' + message,
    Tag: tag
  };

  sendEmail(mailOptions)
    .then(function (result) {
      return res.status(200).json(result);
    })
    .catch(function (e) {
      return res.status(500).json(errorsHandler(e));
    });
});

module.exports = router;
