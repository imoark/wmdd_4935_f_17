/*
  query a star trek api with 
  pass a query string and get back some star trek data
*/
const http = require('http')
const querystring = require('querystring')

const data = require('./data/list-of-star-trek-episodes.json')

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.end(JSON.stringify(data))
  } else if (req.url === '/tng') {
    allTng(res)
  } else {
    const qs = querystring.parse(req.url.split('?')[1])
    if (Object.keys(qs).length > 0) {
      console.log(qs)
      newQS(res, qs)
    } else {
      res.end('oops, looks like something went wrong')
    }
  } 
}).listen(3000)

// this function display all of the next generation episodes
function allTng(res) {
  let tng = data.root.EpisodeRow.filter((item) => {
    return item.series === "TNG"
  })
  res.end(JSON.stringify(tng))
}
// this function allows you to query the 'database' and returns JSON with filtered results
function newQS (res, qString) {
  let qKey = Object.keys(qString)[0]
  let qValue = Object.values(qString)[0]
  console.log(qKey, typeof(qKey))
  let userQuery = data.root.EpisodeRow.filter((item) => {
    return item[qKey] === qValue
  })
  res.end(JSON.stringify(userQuery))
}