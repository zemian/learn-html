let expect = require('chai').expect;
let app = require('../src/app');

describe('app', function () {
    it('app.greet', function () {
        let result = app.greet("World");
        expect(result).to.equal("Hello World");
    });
});
