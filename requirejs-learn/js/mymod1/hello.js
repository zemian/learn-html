/*
NOTE: The module ID of this file is automatically set
to 'mymod1/hello' because we defined requirejs.config
to load from its parent directory.

RequireJS discourage that we name our module explicitly.

 */
define(function(require, exports, module) {
    console.log(module);
    return {
        message: "mymod1.Hello"
    };
});
