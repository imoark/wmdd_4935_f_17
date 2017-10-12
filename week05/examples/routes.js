/*
  the beggining of an adventure time character API
  https://en.wikipedia.org/wiki/Adventure_Time
  you can add and delete characters from the adventure time API
  for example(if you have httpie installed)
  http POST :3000 name=marceline age=1000 species=vampire
  will add marceline the vampire queen to the chracters
  http DELETE :3000 name=jake
  will dekete jake, but why would you delete jake?
*/
const http = require('http')

const ATC = require('./data/advenTime.json')

const server = http.createServer().listen(3000)

server.on('request', (req, res) => {
  // if a POST request is received
  if (req.method == 'POST') {
    let newCharacter = ''
    req.on('data', (data) => {
      newCharacter += data
    })
    req.on('end', () => {
      ATC.push(JSON.parse(newCharacter))
      console.log(ATC)
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end('new character added')
    })
  }
  // if a DELETE request is received
  if (req.method === 'DELETE') {
    let changeChar = ''
    req.on('data', (data) => {
      changeChar += data
    })
    req.on('end', () => {
      adv = JSON.parse(changeChar)
      removeCharacter(ATC, adv)
      res.writeHead(200, {'Content-Type': 'text/plain'})
      res.end(`character removed: ${adv.name}`)
    })
  } 
})

// function to remove a character if name given to delete method matches a name in the database
function removeCharacter (data, obj) {
  data.forEach((elm) => {
    if (elm.name == obj.name) {
      data.splice(data.indexOf(elm), 1)
      console.log(advenTimeCharacters)
    }
  })
}