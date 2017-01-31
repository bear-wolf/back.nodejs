var db = require ('./../db'),
    log = require('./../logger')(module);

db.connect();

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    log(db.getPhrase('Hello') +' '+ who);
}
User.prototype.goodBuy = function(who) {
    log(db.getPhrase('Good buy')+' '+ who);
}

module.exports = {
    User: User
}
//global.User = User; // global variable

//console.log('user is required');
//console.log(module); // variable in even module