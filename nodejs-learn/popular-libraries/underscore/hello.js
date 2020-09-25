/*
DEMO: Use "underscore" as dependency
https://underscorejs.org/

npm install
npm run hello

*/

// Using underscore library functions
const _ = require("underscore");

// Print what's available in the "_" object.
_.each(_.keys(_).sort(), k => console.log(k));
