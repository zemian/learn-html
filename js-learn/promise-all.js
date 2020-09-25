/*
Promise object will begin as soon as you create it with 'new' operator.
The .resolve(<result>) will make <result> available to the caller, only
if they add .then(<result) to receive it.
 */

function log(...args) {
    console.log(new Date(), ...args);
}

var promise1 = new Promise(function(resolve) {
    // Will resolve promise in 300 ms
    setTimeout(function () {
        let result = "foo";
        log("Sending promise1 result", result);
        resolve(result);
    }, 300);
});
var promise2 = new Promise(function(resolve) {
    // Will resolve promise in 300 ms
    setTimeout(function () {
        let result = "bar";
        log("Sending promise2 result", result);
        resolve(result);
    }, 350);
});

Promise.all([promise1, promise2]).then(function (results) {
    log("Received promise results", results);
});
