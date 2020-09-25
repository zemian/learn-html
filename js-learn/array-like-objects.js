function test() {
    // "arguments" is an array-like-object.
    console.log("arguments", arguments);
    console.log("arguments.length", arguments.length);
    console.log("arguments[0]", arguments[0]);

    // We can convert array-like-object into actual array using "slice"
    let array = Array.prototype.slice.call(arguments);
    console.log("Argument array", array);

    // Other array-like-objects are NodeList and HTMLCollection etc.
    // see "js-html/array-like-objects.html"
}
// test(1, 2, 3);

// Write your own array-like-object
function test2() {
    let myArrayLike = {
        length: 3,
        0: "one",
        1: "two",
        2: "three"
    };

    console.log("Convert Using Array.from()");
    for (let x of Array.from(myArrayLike))
        console.log(x);
}
test2();
