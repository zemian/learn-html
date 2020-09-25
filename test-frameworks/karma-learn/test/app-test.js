let assert = require('chai').assert;
let app = require('../src/app');

describe('app', function () {
    it('app.greet', function () {
        let result = app.greet("World");
        assert.equal(result, "Hello World");
    });
});
