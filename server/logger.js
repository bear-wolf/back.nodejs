module.exports = function (module) {

    return function () {
        //console.log(module);
        var args = [module.filename].slice.call(arguments);
        console.log.apply(console, args);
    }
}