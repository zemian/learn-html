let assert = require('chai').assert;
let sinon = require('sinon');
let app = require('../src/app');

describe('app', function () {
    it('app.greet', function () {
        let stub = sinon.stub(app, "greet");
        app.greet("World");
        assert.equal(stub.callCount, 1);
        stub.restore();
    });
});
