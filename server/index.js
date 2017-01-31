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
var log = require('./logger')(module),
    User = require('./user'),
    Errors = require('./error'),
    EventEmitter = require('events').EventEmitter;

var helper = new EventEmitter;

function makePage(url) {
    if (url != 'index.html') {
        throw new Errors.HttpError(404, 'Нет такой страницы')
    }
}


function run() {
    var angy = new User.User('Andrew');
    var piter = new User.User('Piter');

    try {
        angy.hello(angy.name)
        piter.hello(piter.name);
        angy.goodBuy(angy.name)
        piter.goodBuy(piter.name);

        console.log('get index page');
        makePage('index');

        log('Run successful...');
    }
    catch (e) {
        if (e instanceof Errors.PhraseError) {
            console.log(e.message)
        } else {
            if (e instanceof Errors.HttpError) {
                console.log('сообщение: '+e.status+':'+e.message)
            } else console.log('сообщение: '+ e.message);
        }
    }

    helper.on('request', function (data) { // обработчик
        console.log('helper:', data);
    })
    
    helper.emit('request', {text:123, message: 'message'}) // створюю запрос

}


if (module.parent) {
    exports.run = run; // if other file required this module
} else {
    run(); // no connect
}

