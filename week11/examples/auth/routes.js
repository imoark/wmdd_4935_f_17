module.exports = {
  method: 'GET',
  path: '/',
  config: {
    auth: 'api' // tell hapi which strategy to use for this route
  },
  handler: function (request, reply) {
    return reply({isAuthenticated: 'yes'})
  }
}
