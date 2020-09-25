define(["require", "exports", "hello"], function (require, exports) {
    "use strict";
    function ExportsDemoHello(msg) {
        this.message = msg;
        this.getMessage = function() {
            return this.message;
        }
    }

    exports.ExportsDemoHello = ExportsDemoHello;
    exports.exportsDemoHello1 = new ExportsDemoHello("Hi1");
    exports.exportsDemoHello2 = new ExportsDemoHello("Hi2");

    // NOTE the require() needs the module to be include in the deps in
    // define() first! So this is just another way to assign the module
    // to a variable name.
    var hello = require("hello");
    exports.hello = hello;
});
