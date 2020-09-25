// This is the CommonJS way of exporting vars, which is supported by RequireJS
// as wrapper function.
// A more direct RequireJS style is simply to use a return statement. See "foolib-object.js"
define(function (require, exports, module) {
    let foo = {
        id: Math.random().toString(16),
        name: "foolib-default"
    };
    module.exports = foo;
    // Note: "module.exports" is same as just a direct return statement in RequireJS!
});
