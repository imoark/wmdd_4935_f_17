const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({port: 3000, host: 'localhost'})

server.route([
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply({hello: 'hello hapi'})
    }
  },
  {
    method: 'GET',
    path: '/{name}',
    handler: function(request, reply) {
      // request.params.name will get the value passed in name from the path
      reply({hello: request.params.name})
    }
  }
])

server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on: ${server.info.uri}`)
})