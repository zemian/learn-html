console.log("Hello World");

// Console log can dump objects
console.log(new Date());
console.log({foo: 99, bar: 'test'});

let a = {foo: 99, bar: 'test'};
a.toString = function() { return `object a(${this.foo}, ${this.bar})`}
console.log('test=' + a);
// But console.log to var itself will still dump the object
console.log(a);

// If you want some string prefix to a dump, you need to pass as separate vars.
// Do not use '+' to concatenate string
console.log('test=', a);

// Console.log supports printf format
console.log("Hi %s! Have a nice day!", "John");

// String concat vs var dump
console.log('' + new Object());
console.log(new Object());
