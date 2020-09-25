# RequireJS

RequireJS loads plain JavaScript files as well as more defined modules. It is
optimized for in-browser use, including in
[a Web Worker](https://requirejs.org/docs/api.html#webworker), but it can be used
in other JavaScript environments, like Rhino and
[Node](https://requirejs.org/docs/node.html). It implements the
[Asynchronous Module](https://github.com/amdjs/amdjs-api/wiki/AMD)
API.

RequireJS uses plain script tags to load modules/files, so it should allow for
easy debugging. It can be used
[simply to load existing JavaScript files](https://requirejs.org/docs/api.html#jsfiles),
so you can add it to your existing project without having to re-write your
JavaScript files.

## The `require` function

NOTE: The `require` function is also aliased with `requirejs` name!

When you write a module, you can use `define()` to bring in `require` function. In fact
you can write CommonJS like style. Example

```
define(function (require, exports, module){
    // ...
});
```

However when using the module, you can do not have the `exports` variable. Example:


```
require(['require', 'module'], function (require, module){
    // ...
});

// Or
requirejs(['require', 'module'], function (require, module){
    // ...
});
```
