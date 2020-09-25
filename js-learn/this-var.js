// What does function context (this) mean?
//
// Context in programming usually means the objects, variables or functions in a namescope
// that are visible to the current thread of execution.
//
// JS has many context of namescope depending where the code (function) is executing. The Context
// can be explicitly access with "this" variable.
//
// When a global function is executing, then it has the "Global Context" or
// (globalThis/window object) visible.
//
// When a function inside a object is executing then the object is the context.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//

'use strict';  // Other mode are 'sloppy mode'

// default "this" is the globalThis object in browser (See this-var.html)
// empty in NodeJS
console.log("Global this: ", this);

// "this" also behave differently if you are in strict mode (empty) vs global if in sloppy mode.
function foo() {
    console.log("A function this: ", this);
}
foo();

// we can bind a object to this
let binding = {name: "Zemian"};
let fooNew = foo.bind(binding);
fooNew();
// or we simply apply 'this'
foo.apply(binding);

// constructor function
function Employee() {
    this.message = "Hello";
    console.log("Constructor function this: ", this);
}
new Employee();

// Object literal this
let foo2 = {
    message: "Hi",
    greeting: function() {
        console.log(this.message);
    }
};
foo2.greeting();

// Store and rename this for nested functions
function Employee2() {
    let self = this;
    self.message = "Hello";

    self.greeting = function() {
        console.log("I am inside a method/function, but accessing class this: ", self);
    }
}
new Employee2().greeting();


// The JS fat arrow does not have its own "this", but it will search for
// the enclosing "this" instead. This means you don't want to use fat arrow
// in some situation:
//
// - When writing object literal
// - When writing constructor function
// - When writing event listener
//
// When not to use fat arrow
// https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/

console.log("== Using 'this' inside a prototype function");
function MyFoo () {
    this.foo = "Foo";
}
MyFoo.prototype.greeting = function () {
    console.log("Hello " + this.foo);
};
var myFoo = new MyFoo();
myFoo.greeting();
