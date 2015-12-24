'use strict';

var logger = require('../../resources/logger');

/**
 * Errors Handler
 * @param  {string} url URL that causes this error
 * @param  {Error}  e   Error
 * @return {hash}       Error reponse to requester
 */
function createErrorMessage (err) {
  var errorMessage;

  if (err.message) {
    errorMessage = err.message;

    logger.info({
      error: err.inner || err
    });
  } else {
    errorMessage = err;

    logger.info({
      error: err.inner || err
    });
  }

  return {
    success: false,
    errorData: {
      error: errorMessage
    }
  };
}

module.exports = createErrorMessage;
