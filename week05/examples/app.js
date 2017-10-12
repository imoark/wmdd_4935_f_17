/*
  this will display a query string
  a query string is a request entered in a url that doesn't point to a specific resource.
  example.com/?apples=delicious
  the example above might be used to pass a query to an API to look for all of the delicious apples.
*/
const http = require('http')
//const url = require('url')
const querystring = require('querystring')

http.createServer((req, res) => {
  //get the request url and split it at '?' this returns an array where everything after the '?' is the second item
  const qs = querystring.parse(req.url.split('?')[1])
  res.writeHead(200, {'Content-Type': 'application/json'})

  if (req.url === '/') {
    res.end(JSON.stringify({instructions: 'enter a query string', sample: '?key=value'}))
  } else {
    //if there is a query string display it
    if (Object.keys(qs).length > 0) {
      res.write(JSON.stringify(qs))
      res.end()
    } else {
      res.end(JSON.stringify({error: 'something went wrong', try: 'is there a query string?'}))
    }
  }
}).listen(3000)