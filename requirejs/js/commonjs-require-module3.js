// You can however use these "virtual" module id's:
// Note that they do not exists as physical files (eg: require.js, exports.js or modules.js)
// Actually with the exception of "require.js".
define(['require', 'exports', 'module'], function(require, exports, module) {
    console.log("We are simulating CommonJS env:");
    console.log(require, exports, module);
    return function() {};
});
