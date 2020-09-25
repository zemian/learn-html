/*
NOTE: Regardless where you run node /path/to/print-cwd.js, the following
values are always relative to where the actual script is.

Example:

zedeng-mac:EloquentJS zedeng$ node node-cwd/print-cwd.js
__filename /Users/zedeng/Documents/EloquentJS/node-cwd/print-cwd.js
__dirname /Users/zedeng/Documents/EloquentJS/node-cwd

*/
console.log("__filename " + __filename);
console.log("__dirname " + __dirname);