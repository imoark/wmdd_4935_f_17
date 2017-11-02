module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply('hello hapi')
    }
  },
  {
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
      if (advTime.hasOwnProperty(request.params.name)) {
        reply(advTime[request.params.name])
      } else {
        reply('no character with that name 404').type('text/plain').code(404)
      }
    }
  }
]