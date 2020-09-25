const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};
console.log("before sleep", new Date());
sleep(3000).then(() => {
    console.log("sleep is done", new Date());
});

// NOTE: You can't do this!
console.log("BAD example: before  1500", new Date());
sleep(1500);
console.log("BAD example: done", new Date());

// Or you can invoke sleep in a "async" function
async function testSleep() {
    console.log(1);
    await sleep(1000);
    console.log(3);
}
testSleep();
console.log(2);
// note: the main script will cont b/c testSleep is 'async'!
// todo: Is output 1 and 2 guaranteed?

