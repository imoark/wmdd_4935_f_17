const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({port: 3000})

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply(html())
  }
})

server.start((err) => {
  if (err) {
    throw err
  }
  console.log(`server listening at: ${server.info.uri}`)
})

function ranHex () {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`
}

function html () {
  return `
  <style>
  div {
    width: 500px;
    height: 500px;
    background-color: ${ranHex()};
  }
  </style>
  <div></div>
  `
}