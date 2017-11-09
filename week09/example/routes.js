const monk = require('monk')
require('dotenv').config()

// get the DBURL value 
const db = monk(process.env.DBURL)
// get or create a collection in mongo
const students = db.get('students')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return reply('a simple student list example, /students')
    }
  },
  {
    method: 'GET',
    path: '/students',
    handler: async (request, reply) => {
      let allStudents = await students.find()
      return reply(allStudents) 
    }
  },
  {
    method: 'GET',
    path: '/students/{studentID}',
    handler: async (request, reply) => {
      let student = await students.find({_id: Number(request.params.studentID)})
      return reply(student)
    }
  },
    {
    method: 'GET',
    path: '/students/{p*}',
    handler: queryName
  }
]

async function queryName (request, reply) {
  if (request.query.name) {
    let student = await students.find({name: request.query.name})
    if (Object.keys(student).length !== 0) {
      return reply(student)
    }
    return reply ('no student by that name').code(404)
  }
  return reply ('query not recognized. try searching by name').code(404)
}
