// Learning JS (Beginner)
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps

// == Print
console.log("Hello World");

// == Variables and Assigments
var a = "Hi";
console.log("var a:", a);
var x = 1,
    y = "two",
    z = {three: 33};
console.log("multi assignments: ", [x, y, z]);

// == Array
console.log("array: ", [1, 2, 3]);
console.log("mix array: ", [1, 2, 3, "one", "two", "three"]);
var ary = [1,2,3];
console.log("ary[1]: ", ary[1]);
delete ary[1];
console.log("ary: ", ary);

// String and Numbers
console.log("String split: ", "hello".split(''));
console.log("String upper: ", "hello".toUpperCase());
console.log("Max number: ", Number.MAX_VALUE);
console.log("Random: ", Math.random());

// == Loops
for (var i = 0; i < 10; i++) {
    console.log("i=" +i);
}
for (var i of ary) {
    console.log("item: " + i);
}

var done = false;
while (!done) {
    console.log("Not done.");
    done = true;
    console.log("It's done now.");
}

// == Conditions
if (Math.random() > .5) {
    console.log("random bigger than .5 is true");
} else {
    console.log("random smaller than .5 is true");
}

// == Operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
console.log("1 >>> 1:", 1 >>> 1);

// == JS Truthy and Falsy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
/*
All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN).
 */
if ("" || 0) {
    console.log("Not true!");
}

