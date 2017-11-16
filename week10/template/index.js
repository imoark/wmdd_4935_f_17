const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({host: 'localhost', port: 3000})

server.register(require('vision'), (err) => {
  if (err) {
    throw err
  }

  server.views({
    engines: {
     ejs: require('ejs') 
    },
    relativeTo: __dirname,
    path: 'templates'
  })

  server.route(require('./routes'))

  server.start((err) => {
    if (err) {
      throw err
    }
    console.log('server running at: ', server.info.uri)
  })
})