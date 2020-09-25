/*
Promise object will begin as soon as you create it with 'new' operator.
The .resolve(<result>) will make <result> available to the caller, only
if they add .then(<result) to receive it.
 */

function log(...args) {
    console.log(new Date(), ...args);
}

new Promise(function (resolve, reject) {
    // Will resolve promise in 300 ms
    setTimeout(function () {
        let result = "foo";
        log("Sending promise result", result);
        resolve(result);
    }, 300);
}).then(function (result) {
    log("Received promise result", result);
    return result;
});

log("promise1 example", promise1);
