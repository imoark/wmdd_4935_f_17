# c9 node notes

to view a node application in your browser on c9

you need to listen(process.env.PORT, process.env.IP) like the example below. you
can then view your running application by visiting `https://workspaceName-userName.c9users.io/` or click the preview button 
and select 'Preview Running Application'.

to start an application use `node fileName.js` or an NPM script from the terminal, not the play button.

```javascript
const http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"})
    res.end(JSON.stringify({'response': 'hello'}))
}).listen(process.env.PORT, process.env.IP)
```

and in hapi:

```javascript
server.connection({
    port: process.env.PORT,
    host: process.env.IP,
    routes: {
        cors: true
    }
})
```

cors is cross-origin resource sharing more [here](https://enable-cors.org/)
