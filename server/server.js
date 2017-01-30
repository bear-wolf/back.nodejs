/**
 * Created by admin on 30.01.2017.
 */
// var http = require('http');
// var static = require('node-static');
// var file = new static.Server('.');

// var config = {
//     port: 8081,
//     start: function(req, res) {
//         res.writeHead(200, {
//             'Content-Type': 'text/plain',
//             'Cache-Control': 'no-cache'
//         });
//         res.end("OK");
//     }
// }
//
// http.createServer(config.start()).listen(config.port);
//
// console.log('Server running on port: '+ config.port);

var log = require('./logger')(module);
var User = require('./user');

function run() {
    var angy = new User('Andrew');
    var piter = new User('Piter');
    angy.hello(angy.name)
    piter.hello(piter.name);
    angy.goodBuy(angy.name)
    piter.goodBuy(piter.name);

    log('Run successful');
}


if (module.parent) {
    exports.run = run; // if other file required this module
} else {
    run(); // no connect
}

