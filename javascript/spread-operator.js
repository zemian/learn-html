// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function f(x, y, z) { console.log([x, y, z]);}
var args = [0, 1, 2];

// Watch the difference in output
f(args);
f(...args);

// == Usages

// For Function Calls:
// myFunction(...iterableObj);

// For array literals or strings:
// [...iterableObj, '4', 'five', 6];

// For object literals (new in ECMAScript 2018):
// This will clone an object!
// let objClone = { ...obj };
