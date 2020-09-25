var assert = require('chai').assert;
var foo = 'bar';
assert.strictEqual(foo, 'bar');
assert.strictEqual(foo, 'BAR');
assert.strictEqual(foo.toUpperCase(), 'BAR');
