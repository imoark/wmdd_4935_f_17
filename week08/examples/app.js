const Hapi = require('hapi')

advTime = {
  finn: {
    age: 17
  },
  jake: {
    age: 18
  },
  marceline: {
    age: 'more than 1000 years old'
  }
}

// create a new hapi server, this is where the magic happens
const server = new Hapi.Server()
// tell the server the host and port to listen on
server.connection({port: 3000, host: 'localhost'})

server.route(require('./routes'))

// start the server, handle any errors
server.start((err) => {
  if (err) {
    throw err
  }
  // log the port and host that the server is listening on
  console.log(`server is listening on: ${server.info.uri}`)
})