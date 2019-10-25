var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(302, {Location: "http://xhaus.com/headers"});
    response.write('<h1>Hello Node!!!!</h1>\n');
    response.write(JSON.stringify(request.headers["user-agent"]));
    response.end();
}).listen(3000);
console.log('Server running at http://localhost:3000');