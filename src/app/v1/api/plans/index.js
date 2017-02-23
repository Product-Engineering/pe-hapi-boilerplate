exports.register = function (server, options, callback) {
  server.register([
    require('./store'),
    require('./routes')
  ], callback)
}

exports.register.attributes = {
  name: 'plan-api',
  version: '0.0.1',
  description: 'Persistance layer interaction for Plans resource'
}
