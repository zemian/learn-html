// What's the difference between "exports" vs "module.exports"
// See https://nodejs.org/api/modules.html#modules_exports_shortcut
// See https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system
//
// exports is a convenience reference to module.exports
// module.exports is what will return when you do require("module")
//
// NOTE: Node modules are wrapped as IIFE(Immediately Invoked Function Expression)
//

// Default module.exports value is empty ({})
console.log("== Default values");
console.log("exports", exports);
console.log("module.exports", module.exports);

// Append properties to either variables is same and safe!
console.log("== After adding 'foo' property");
exports.foo = "hello";
console.log("exports", exports);
console.log("module.exports", module.exports);

// Assignment will destroy the reference and hence make two variables different!
exports = {message: "Hello"};
console.log("== Assignment to exports is BAD!");
console.log("exports", exports);
console.log("module.exports", module.exports);

// Case2: Assignment will destroy the reference and hence make two variables different!
module.exports = {message2: "Hello Again"};
console.log("== Assignment to module.exports");
console.log("exports", exports);
console.log("module.exports", module.exports);
