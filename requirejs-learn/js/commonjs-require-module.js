/*
The params: require, exports, module
are actually the definition of AMD spec. (https://github.com/amdjs/amdjs-api/blob/master/AMD.md),
which the RequireJS implements.

The CommonJS is older version of library that tried to implements a solution
to solve the JS "module" problem. But it load things in sync fashion. (AMD is
async!). A special style of CommonJS is to use a "require()" function to load module
and "exports" object to exposing module data.

Other module implementation are: NodeJS and ES6 JS lang itself.

REF: https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b

Here we setup RequireJS that provide the similar "require()" function and "exports"
object. The "module" object is the reference to the module object we are building.
 */
define(function(require, exports, module) {
    console.log("We are simulating CommonJS env:");
    console.log(require, exports, module);

    var hello = require("hello");
    var util = require("util");

    console.log("Hello message: " + hello.message);
    console.log("Util func: " + util.upper(hello.message));

    return function() {};
});
