/*
This demo proves that despite the Promise and setTimeout behavior, they are simply event
based asynchronous dispatching, not a "multi threaded" or preemptive execution.

This means the entire function will be executed in one go as soon as it gets pulled out of
the event queue for execution. No two function's inner code will ever gets run preemptively
in a mixed order fashion.

NOTE: If you really needs multi-threaded behavior in JS, you need to use WebWorker:
see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
 */

const max = 1000;
// function heavyWork() {
//     let ret = 0.0;
//     for (let i = 0; i < max; i++)
//         ret += Math.cos(i * Math.random());
//     return ret;
// }
async function pause(ms) {
    await new Promise(r => setTimeout(() => r(), ms));
}
async function f1() {
    await pause(0);
    let ret = 0.0;
    for (let i = 0; i < max; i++)
        ret += Math.cos(i * Math.random());
    console.log("f1", ret);
}
function f1b() {
    setTimeout(() => {
        let ret = 0.0;
        for (let i = 0; i < max; i++)
            ret += Math.cos(i * Math.random());
        console.log("f1b", ret);
    }, 0);
}
function f2() {
    let ret = 0.0;
    for (let i = 0; i < max; i++)
        ret += Math.cos(i * Math.random());
    console.log("f2", ret);
}

f1();
f1b();
f2();
