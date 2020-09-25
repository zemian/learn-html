// Import app.js code and test against it

let assert = require('chai').assert;
let app = require('../src/app');

let result = app.greet("World");
assert.strictEqual(result, "Hello World");
