
// Fat arrow do not need 'return' keyword!
var f1 = () => "Hello";
console.log("fat arrow function: ", f1());

// Normal function require 'return' or else it will give you undefined!
var f2 = function() { "Hello"; };  // BAD without return!
console.log("normal function: ", f2()); // Output: normal function:  undefined

// This is normal and work as expected.
var f2b = function() { return "Hello"; };
console.log("normal function: ", f2b());
