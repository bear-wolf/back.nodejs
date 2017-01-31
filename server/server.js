var http = require('http'),
    url = require('url'),
    server = new http.Server(function (request, responce) {
        var result='';
        console.log(request.method, request.url);
        console.log('about next');

        // var urlParsed = url.parse(request.url, true);
        // console.log(urlParsed);
        // if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        //     result = urlParsed.query.message;
        // } else {
        //     responce.statusCode = 404;
        //     result = 'Page no found';
        // }
        responce.end(result);
    }),
    emit = server.emit;

server.listen(1337, '127.0.0.1');

// server.on('request', function (request, response) {
//     response.end('Hello world')
// });


server.emit = function (event) {
    console.log(event);
    emit.apply(server, arguments);
}

console.log('Server is started');