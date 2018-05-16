const http = require('http')
const forward = require('http-forward')
 
var server = http.createServer(function (req, res) {
  // Define proxy config params
  req.forward = { target: 'fill in the real service endpoint' }
  forward(req, res)
})
 
server.listen(3979)