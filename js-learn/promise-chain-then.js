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
    log("Received result in 1st then:", result);
    return result.toUpperCase();
}).then(function (result) {
    log("Received result in 2nd then:", result);
    return result + " " + result;
}).then(function (result) {
    log("Received result in 3rd then:", result);
    return result.toLowerCase();
}).then(function (result) {
    log("Received result in 4th then:", result);
    return result;
});
