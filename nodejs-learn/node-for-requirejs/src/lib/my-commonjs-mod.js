define(function(require, exports, module) {
    // var a = require('a'),
    //     b = require('b');

    //Return the module value
    return function () {
        this.name = "Foo";
        this.greeting = function () {
            return "Hello " + this.name;
        }
    };
});
