var _ = require('lodash');
var Hapi = require('hapi');
var http = require('http')
var config = require('config')
var superagent = require('superagent');
var fs = require('fs');
var path = require('path');
// Sentry Config
const NOT_DEV = _.includes(['production', 'staging'], process.env.NODE_ENV);
if (NOT_DEV) {
  serverHost = '0.0.0.0'; // needs to be 0.0.0.0 for heroku
} else {
  serverHost = config.WEB_CLIENT_ROOT.match(/\/\/(.*):/)[1];
}
var HapiOptions = {
  debug: {
    request: ['error']
  }
}
var server = new Hapi.Server(HapiOptions);

var path = require('path');
var config = require('config');
var url = require('url');
var serverHost;
var connectionOptions = {
  host: serverHost,
  port: process.env.PORT || 9000,
  routes: {
    cors: {
      origin: ['*'],
      additionalExposedHeaders: ['authorization'],
      credentials: true
    }
  }
}
server.connection(connectionOptions);

const goodOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout'],
    file: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ ops: '*' }]
    }, {
      module: 'good-squeeze',
      name: 'SafeJson'
    }
    // {
    //   module: 'good-file',
    //   args: ['./test/fixtures/awesome_log']
    // }
    ],
    http: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ error: '*' }]
    }, {
      module: 'good-http',
      args: ['http://prod.logs:3000', {
        wreck: {
          headers: { 'x-api-key': 12345 }
        }
      }]
    }]
  }
};

var plugins = [
  {
    register: require('good'),
    options: goodOptions
  },
  require('inert'),
  require('vision'),
  require('./src/app/v1/api/plans'),
]

server.register(plugins, (err) => {
  if (err) {
    throw err;
  }
})

server.route([
  {
    method: 'GET',
    path: '/',
    config: {
      auth: false,
      handler: function (request, reply) {
        return reply('API is up!')
      }
    }
  }
]);

server.start(() => {
  console.log('Server running at:', server.info.uri);
})

module.exports.server = server;
