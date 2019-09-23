var http = require('http');

function service(request, response) {

    // response.writeHead(200, {'Content-Type': 'application/json'});
    // let responseData = {
    //     data: {
    //         value: 'Hello Node.js_2019-09-23'
    //     },
    //     code: 200,
    //     description: 'success'
    // };
    // response.end('66',responseData);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Node.js_2019-09-23');
}

var server = http.createServer(service);

server.listen(8088);
