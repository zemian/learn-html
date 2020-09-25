define(['require', 'exports', 'module'], function(require, exports, module) {
    console.log("We are simulating CommonJS env:");
    console.log(require, exports, module);

    // We can use "exports" to return module data
    exports.helloMessage = "Hello World";
});
