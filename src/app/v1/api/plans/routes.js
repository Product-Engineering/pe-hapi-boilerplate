var Joi = require('joi');
var Boom = require('boom');
exports.register = function(server, options, callback) {
  /**
  * Plans Route
  */
  server.route([
    {
      method: ['GET'],
      path: '/v1/plans',
      config: {
        auth: false,
        tags: ['user'],
        description: "Return Filtered Plans",
        handler: function(request, reply) {
          server.methods.applyFilters(request.query, reply)
        }
      }
    }
  ])

  callback();
};

exports.register.attributes = {
  name: 'plans-routes',
  version: '0.0.1',
  description: 'Routes for Plans resource'
};
