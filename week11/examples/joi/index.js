const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({
  host: 'localhost',
  port: 3000
})

server.route(require('./routes'))

server.start((err) => {
  if (err) {
    throw err
  }
  console.log('server listening at: ', server.info.uri)
})