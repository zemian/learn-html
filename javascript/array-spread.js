function test(arrays) {
    console.log("arrays", arrays);
}
test(["one", "two", "three"]);
test("one", "two", "three");
test("one");

function testSpread(...arrays) {
    console.log("testSpread", arrays);
}
testSpread(["one", "two", "three"]);
testSpread("one", "two", "three");
testSpread("one");
testSpread({foo: 123}, {bar: "one"});

function testSpread2(...arrays) {
    console.log("testSpread - console.log spread", ...arrays);
}
testSpread2(["one", "two", "three"]);
testSpread2("one", "two", "three");
testSpread2("one");
testSpread2({foo: 123}, {bar: "one"});

