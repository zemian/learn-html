// Node module is just a simple JS file
// https://nodejs.org/api/modules.html

// Each module has a built-in variable name "module"
console.log("I am inside 'mymodule', and module: ", module);

// We can export properties from module to users
module.exports.greeting = () => "Hello";

// Another way to export is to use "exports" alias, which reference
// same as "module.exports". For convenience.
exports.message2 = "Hello again";
