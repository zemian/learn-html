const _ = require('lodash');
module.exports = {
    libname: "mylib1",
    mydeps: ['lodash-' + _.VERSION],
    PI: Math.PI,
    random: function (min, max) {
        return Math.floor(Math.random() * max) + min;
    },
    greeting: function (name) {
        return "Hello " + name;
    }
};
