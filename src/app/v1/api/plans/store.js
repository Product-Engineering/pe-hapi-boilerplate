var _ = require('lodash');
var config = require('config');
var request = require('superagent');
var helpers = require('./helpers');

exports.register = function(server, options, callback) {

  server.method('applyFilters', function(query, next) {
    var data = helpers.applyFilters(query)
    next(null, data)
  });

  callback();
};

exports.register.attributes = {
  name: 'plan-store',
  version: '0.0.1',
  description: 'Server methods for Plan resource'
};
