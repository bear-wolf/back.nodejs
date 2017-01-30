/**
 * Created by admin on 31.01.2017.
 */
var phrases;
exports.connect = function () {
    phrases = require('./ru.json');
};

exports.getPhrase = function (key) {
    if (!phrases[key]) {
        throw new Error('Нет такой фразы: '+key);
    } else {
        return phrases[key];
    }
};