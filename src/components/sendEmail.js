'use strict';

var Promise = require('bluebird');
var config = require('config');
var postmark = require('postmark')(config.postmark.key);

module.exports = function (mailOptions) {
  return new Promise(function (resolve, reject) {
    postmark.send(mailOptions, function (error) {
      if (error) {
        reject({
          success: false,
          message: error.message
        });
      }

      resolve({
        success: true
      });
    });
  });
};
