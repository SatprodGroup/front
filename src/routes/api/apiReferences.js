'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash/collection');

var references = require('../../../data/references');

var errorsHandler = require('../fixtures/errorsHandler');

/**
 * Get References data.
 */
router.get('/', function (req, res) {
  return res.status(200).json(references);
});

/**
 * Get One Reference data.
 */
router.get('/:slug', function (req, res) {
  var slug = req.params.slug;

  if (!slug) {
    return res.status(400)
      .json(errorsHandler('the reference slug is needed'));
  }

  var result = _.findWhere(references.references_items, {
    'slug': slug
  });

  if (!result) {
    return res.status(404)
      .json(errorsHandler('the reference slug doesn\t exist'));
  }

  return res.status(200).json(result);
});

module.exports = router;
