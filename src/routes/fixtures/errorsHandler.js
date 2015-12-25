'use strict';

var logger = require('../../resources/logger')
  .create({ module: 'errorsHandler' });

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

    logger.error('response-error', err);
  } else {
    errorMessage = err;

    logger.error('response-error', err);
  }

  return {
    success: false,
    errorData: {
      error: errorMessage
    }
  };
}

module.exports = createErrorMessage;
