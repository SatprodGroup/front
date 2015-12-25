'use strict';

var bunyan = require('bunyan');
var config = require('config');
var pkg = require('../../package');

var Logentries = require('le_node');

var logentries = Logentries.bunyanStream({
  token: config.logEntries.token,
  console: true
});

var mainLogger = bunyan.createLogger({
  name: pkg.name,
  version: pkg.version,
  level: config.logLevel,
  serializers: {
    error: bunyan.stdSerializers.err
  },
  streams: [logentries]
});

function buildLog (event, data, meta) {
  meta = meta || null;
  data = data || null;

  if (data instanceof Error) {
    data = bunyan.stdSerializers.err(data);
  }

  return {
    event: event,
    data: data,
    meta: meta
  };
}

var methods = function (loggerRef) {
  return {
    debug: function (event, data, meta) {
      loggerRef.debug(buildLog(event, data, meta));
    },
    info: function (event, data, meta) {
      loggerRef.info(buildLog(event, data, meta));
    },
    warn: function (event, data, meta) {
      loggerRef.warn(buildLog(event, data, meta));
    },
    error: function (event, data, meta) {
      loggerRef.error(buildLog(event, data, meta));
    },
    fatal: function (event, data, meta) {
      loggerRef.fatal(buildLog(event, data, meta));
    }
  };
};

function createLogger (info) {
  var loggerRef = mainLogger.child(info);

  return methods(loggerRef);
}

function getLogger () {
  return methods(mainLogger);
}

module.exports = {
  create: createLogger,
  get: getLogger
};
