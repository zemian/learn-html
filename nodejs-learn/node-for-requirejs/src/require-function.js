/*
NOTE: Both 'require' and 'module' (or exports) are built-in variables in NodeJS!
 */
console.log("NodeJS require", require);
console.log("=======================");
console.log("NodeJS module", module);
console.log("=======================");

var requirejs = require('requirejs');
requirejs(['require', 'module'], function(requirejsRequire, requirejsModule) {
    console.log("RequireJS require", requirejsRequire);
    console.log("=======================");
    console.log("RequireJS module", requirejsModule);
    console.log("=======================");
});
