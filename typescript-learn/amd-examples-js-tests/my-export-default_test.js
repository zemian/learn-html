var requirejs = require('requirejs');

// NOTE: TS "export default" is more intend for TS import use only.
// Plain RequireJS still works, but it will NOT be pretty.
requirejs(['../amd-examples/my-export-default'], function(myexportdefault) {
   console.log("myexportdefault.default: ", myexportdefault.default);
   new myexportdefault.default().greeting();
});
