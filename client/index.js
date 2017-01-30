/**
 * Created by admin on 30.01.2017.
 */
//var user = require('./user');
require('./../server/user/index');

var angy = new User('Andrew');
var piter = new User('Piter');

angy.hello(angy.name)
piter.hello(piter.name);
angy.goodBuy(angy.name)
piter.goodBuy(piter.name);

