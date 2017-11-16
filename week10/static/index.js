const Hapi = require('hapi')
const Inert = require('inert')

const server = new Hapi.Server()

server.connection({host: 'localhost', port: 3000})

// registering the inert plugin
server.register(Inert, (err) => {
  if (err) {
    throw err
  }

  // server.route() and server.start() called inside register
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      // directory handler specifies path
      // only files inside public are served
      directory: {
        path: 'public',
        listing: true,
        index: true
      }
    }
  })

  server.start ((err) => {
    if (err) {
      throw err
    }
    console.log('server listening at: ', server.info.uri)
  })
})