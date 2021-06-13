var http = require('http');
var url = require('url');
var fs = require('fs');

const errorPage = fs.readFileSync('404.html')

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      return res.end(errorPage);
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(5000); 