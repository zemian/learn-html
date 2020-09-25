let requirejs = require('requirejs');
requirejs(['lib/foo'], function (foo) {
    console.log("foo.message", foo.message);
});
