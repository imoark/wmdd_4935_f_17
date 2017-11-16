data = {
  name: 'the index page',
  date: '03/05/2015'
}

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply.view('index', data)
  }
}]