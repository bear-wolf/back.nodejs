/**
 * Created by andrew on 1/31/17.
 */
var util = require('util');

function PhraseError(message) {
    this.message = message;
}
PhraseError.prototype.name = 'PhraseError';

util.inherits(PhraseError, Error); // наследование

function HttpError(status, message) {
    this.status = status;
    this.message = message;
}
HttpError.prototype.name = 'HttpError';
util.inherits(HttpError, Error); // наследование


module.exports = {
    PhraseError: PhraseError,
    HttpError : HttpError
};