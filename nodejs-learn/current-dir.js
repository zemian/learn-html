// https://nodejs.org/docs/latest/api/modules.html#modules_dirname
// Both "__filename" and "__dirname" are for module file location

console.log("__filename = ", __filename);

console.log("__dirname = ", __dirname);
// same as:
let path = require("path");
console.log("path.dirname(__filename) = ", path.dirname(__filename));

// Convert "." to absolute path
console.log("'.' = ", path.resolve("."));
