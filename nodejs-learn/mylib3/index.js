const mylib1 = require('mylib1');
const mylib2 = require('mylib2');

// const _ = require('lodash');
// console.log("Using lodash version: " + _.VERSION);

module.exports = {
    libname: "mylib3",
    mydeps: [mylib1.libname, mylib2.libname].concat(mylib1.mydeps, mylib2.mydeps)
};
