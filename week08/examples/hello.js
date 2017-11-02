// import hapi
const Hapi = require('hapi')

// create a new hapi server, this is where the magic happens
const server = new Hapi.Server()
// tell the server the host and port to listen on
server.connection({port: 3000, host: 'localhost'})

server.route({
  method: 'GET',
  path: '/',
  handler(request, reply) {
    reply('hello hapi')
  }
})

// start the server, handle any errors
server.start((err) => {
  if (err) {
    throw err
  }
  // log the port and host that the server is listening on
  console.log(`server is listening on: ${server.info.uri}`)
})