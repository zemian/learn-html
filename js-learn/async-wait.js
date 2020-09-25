let myFirstPromise = new Promise((resolve, reject) => {
    console.log("promise starting");
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout( function() {
        let result = Math.random().toString(16);
        console.log("promise is generating result: " + result);
        resolve(result);
    }, 3000);
    console.log("promise ended");
});

let af = async function () {
    console.log("async function starting. invoking promise");
    let successMessage = await myFirstPromise;
    console.log("async function received promise result:" + successMessage);
    console.log("function is done.");
};

let af2 = function () {
    console.log("function starting. invoking promise");

    // Note you can not get promise result outside like this!
    // let successMessage = myFirstPromise.then(result => result);

    myFirstPromise.then(successMessage => {
        console.log("function received promise result: " + successMessage);
    });
    console.log("function is done.");
};

// Example1
/*
promise starting
promise ended
main script starting
async function starting. invoking promise
main script ended
promise is generating result: 0.da3013ed8a839
async function received promise result:0.da3013ed8a839
function is done.
 */
console.log("main script starting");
af();
console.log("main script ended");

// // Example2:
// /*promise starting
// promise ended
// main script starting
// function starting. invoking promise
// function is done.
// main script ended
// promise is generating result: 0.22abf8c46f1d9
// function received promise result: 0.22abf8c46f1d9
//  */
// console.log("main script starting");
// af2();
// console.log("main script ended");

/*
NOTE: The example1 and example2 difference is that "function is done." invocation order
is important. Also note that both af() and af2() will be invoked asynchronously!

NOTE: the output of the promise invocation is almost immediately. It should
even come before the main script!

NOTE: To invoke a promise, you must call the then() method and use the result
as callback function param. The then() method it self will not return the result
if you are not calling with 'await' keyword! It returns Promise object instead.
 */
