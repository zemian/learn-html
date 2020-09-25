let mocha = require('mocha');
let assert = require('chai').assert;
let app = require('../src/app');

mocha.describe('app', function () {
    mocha.it('app.greet', function () {
        let result = app.greet("World");
        assert.equal(result, "Hello World");
    });
});
