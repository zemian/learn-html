// Note that you can't add first array parameter!
define([], function(require, exports, module) {
    console.log("BAD Example! We are simulating CommonJS env:");
    console.log(require, exports, module);
    return function() {};
});
