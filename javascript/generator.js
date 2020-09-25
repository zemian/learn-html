// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

// The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
var g = gen(); // "Generator { }"
console.log("g: " + g);

// g.next() returns object with {done, value}
var ret = g.next();
console.log("generator result: ", ret);
var ret = g.next();
console.log("generator result: ", ret);
var ret = g.next();
console.log("generator result: ", ret);
var ret = g.next();
console.log("generator result: ", ret);


// What is iterable protocol vs iterator protocol
// iterable protocol => allows JavaScript objects to define or customize their iteration behavior (for .. of)
// iterator protocol => defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.

// == Generator Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function*

// NOTE: A generator object is both, iterator and iterable:

// Generator Function Statement
function* foo() {
    yield 'a';
    yield 'b';
    yield 'c';
}
console.log("foo type: " + typeof foo);
var str = "";
for (let val of foo()) {
    str = str + val;
}
console.log('str: ' + str);

// Generator Function Expression
var f = function* () { yield 'hi'; }
console.log(f().next().value);
