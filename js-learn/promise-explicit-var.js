function log(...args) {
    console.log(new Date(), ...args);
}

var promise1 = new Promise(function (resolve, reject) {
    // Will resolve promise in 300 ms
    setTimeout(function () {
        let result = "foo";
        log("Sending promise result", result);
        resolve(result);
    }, 300);
});

// Receive promise result in the .then() method.
promise1.then(function (result) {
    log("Received promise result", result);
    return result;
});

log("promise1 example", promise1);
