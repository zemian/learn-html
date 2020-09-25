// You can use Symbol as key in object literal with []

var a = {
    [Symbol.asyncIterator]: async function*() {
        yield "hello";
        yield "async";
        yield "iteration!";
    }
};
console.log(a);
