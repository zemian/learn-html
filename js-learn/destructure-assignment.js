// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// We can unpack array, object into variables!

var a, b, rest;
[a, b] = [1, 100];
console.log("a, b:", a, b);

var [c, d] = [2, 200];
console.log("c, d:", c, d);

// Swap values
var a = 1;
var b = 3;
[a, b] = [b, a];
console.log("a, b:", a, b);

// capture function return
function f() {
    return [1, 2];
}
var a, b;
[a, b] = f();
console.log("a, b:", a, b);

// Ignore return values
function f() {
    return [1, 2, 3];
}
var [a, , b] = f();
console.log("a, b:", a, b);

// Practical ignore value mean with RegExp
function parseProtocol(url) {
    var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
        return false;
    }
    console.log("parsedURL:", parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

    var [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
}
console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript')); // "https"

// Using spread to capture remaining assigment
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log("a, b, rest: ", a, b, rest);

// Expression of "()" is required!
({ a, b } = { a: 10, b: 20 });
console.log("a, b:", a, b);

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log("a, b, rest: ", a, b, rest);
