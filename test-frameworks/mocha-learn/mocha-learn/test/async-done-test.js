let mocha = require('mocha');
let assert = require('assert');

let describe = mocha.describe,
    it = mocha.it;
describe('async-done', function() {
    it('async-done with timer', function(done) {
        this.timeout(700);
        console.log("Starting a async test...");
        setTimeout(function () {
            console.log("Timeout func called. Will finish up the test now.");
            assert.ok(true);
            done();
        }, 450);
    });
});

// Example from https://mochajs.org/#getting-started
// describe('User', function() {
//     describe('#save()', function() {
//         it('should save without error', function(done) {
//             var user = new User('Luna');
//             user.save(function(err) {
//                 if (err) done(err);
//                 else done();
//             });
//         });
//     });
// });

// Promise example from https://mochajs.org/#getting-started
// beforeEach(function() {
//     return db.clear().then(function() {
//         return db.save([tobi, loki, jane]);
//     });
// });
// describe('#find()', function() {
//     it('respond with matching records', function() {
//         return db.find({type: 'User'}).should.eventually.have.length(3);
//     });
// });

