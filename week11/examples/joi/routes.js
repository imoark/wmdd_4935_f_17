const Joi = require('joi')

const newUserSchema = {
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(12).max(120)
}

module.exports = [
  {
    method: 'POST',
    path: '/users',
    config: {
      validate: {
        payload: newUserSchema
      }
    },
    handler: (request, reply) => {
      return reply(request.payload)
    }
  }
]