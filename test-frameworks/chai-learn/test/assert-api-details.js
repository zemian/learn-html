let assert = require('chai').assert;

assert('foo' !== 'bar', 'foo is not bar');
assert(Array.isArray([]), 'empty arrays are arrays');

// Test for 'truthy', not just boolean
assert.isOk('everything', 'everything is ok');
//assert.isOk(false, 'this will fail');

// assert.isNotOk('everything', 'this will fail');
assert.isNotOk(false, 'this will pass');

// Test for boolean, not 'truthy'
var teaServed = true;
assert.isTrue(teaServed, 'the tea has been served');

assert.equal(1 + 1, 2);
assert.equal(3, '3', '== coerces values to strings');

assert.notEqual(3, 4, 'these numbers are not equal');

assert.strictEqual(true, true, 'these booleans are strictly equal');
//assert.strictEqual(3, '3', 'this will fail');

assert.deepEqual({ tea: 'green' }, { tea: 'green' });

assert.closeTo(1.5, 1, 0.5, 'numbers are close');

assert.isAbove(5, 2, '5 is strictly greater than 2');  // >
assert.isBelow(3, 6, '3 is strictly less than 6');     // <
assert.isAtLeast(5, 2, '5 is greater or equal to 2');  // >=
assert.isAtLeast(3, 3, '3 is greater or equal to 3');  // >=
assert.isAtMost(3, 6, '3 is less than or equal to 6'); // <=
assert.isAtMost(4, 4, '4 is less than or equal to 4'); // <=

assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
assert.typeOf('tea', 'string', 'we have a string');
assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
assert.typeOf(null, 'null', 'we have a null');
assert.typeOf(undefined, 'undefined', 'we have an undefined');

var Tea = function (name) { this.name = name; }
    , chai = new Tea('chai');
assert.instanceOf(chai, Tea, 'chai is an instance of tea');

assert.include([1,2,3], 2, 'array contains value');
assert.include('foobar', 'foo', 'string contains substring');
assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property');

assert.match('foobar', /^foo/, 'regexp matches');

assert.lengthOf([1,2,3], 3, 'array has length of 3');
assert.lengthOf('foobar', 6, 'string has length of 6');
assert.lengthOf(new Set([1,2,3]), 3, 'set has size of 3');
assert.lengthOf(new Map([['a',1],['b',2],['c',3]]), 3, 'map has size of 3');

// Asserts that object has at least one of the keys provided.
assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'iDontExist', 'baz']);
assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, iDontExist: 99, baz: 1337});
assert.hasAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
assert.hasAnyKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{foo: 'bar'}, 'anotherKey']);

assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337});
//assert.hasAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
//assert.hasAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']));

assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'baz']);
assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, baz: 1337});
assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337});
//assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}]);
//assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
//assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}]));
//assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']));

assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
assert.doesNotHaveAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
assert.doesNotHaveAnyKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']));

assert.oneOf(1, [ 2, 1 ], 'Not found in list');

assert.isEmpty([]);
assert.isEmpty('');
assert.isEmpty(new Map);
assert.isEmpty({});



function fn() {
    throw 'Error thrown must have this msg';
}
assert.throws(fn, 'Error thrown must have this msg');
// assert.throws(fn, /Error thrown must have a msg that matches this/);
// assert.throws(fn, ReferenceError);
// assert.throws(fn, errorInstance);
// assert.throws(fn, ReferenceError, 'Error thrown must be a ReferenceError and have this msg');
// assert.throws(fn, errorInstance, 'Error thrown must be the same errorInstance and have this msg');
// assert.throws(fn, ReferenceError, /Error thrown must be a ReferenceError and match this/);
// assert.throws(fn, errorInstance, /Error thrown must be the same errorInstance and match this/);


var err = false;
//var err = new Error('I am a custom error'); // Enable this will cause the test fail with error thrown!
assert.ifError(err); // Rethrows err!

// Enable any of these will fail the test
// assert.fail();
// assert.fail("custom error message");
// assert.fail(1, 2);
// assert.fail(1, 2, "custom error message");
// assert.fail(1, 2, "custom error message", ">");
// assert.fail(1, 2, undefined, ">");
