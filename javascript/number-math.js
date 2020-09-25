
/*
 The JavaScript Number type is double-precision 64-bit binary format IEEE 754 value.

 NOTE: There is difference between "new Number(value)" vs "Number(value)"!

 A Number object is created using the Number() constructor.
 A primitive type object number is created using the Number() function.

 new Number(value);
 var a = new Number('123'); // a === 123 is false
 var b = Number('123'); // b === 123 is true
 a instanceof Number; // is true
 b instanceof Number; // is false

 */

// JS Number is used for int and float
var n = 99;
console.log(n, typeof n);

var n2 = 3.14;
console.log(n2, typeof n2);

var n3 = 3.1415926535897932384626433832795028841971693993751;
console.log(n3, typeof n3);
console.log("Compare large float:", n3 === 3.1415926535897932384626433832795028841971693993751);

var n3b = Math.PI;
console.log(n3b, typeof n3b);

// Floating Point Representation
// https://floating-point-gui.de/languages/javascript/
console.log("0.1 + 0.2 = ", 0.1 + 0.2);

// String to float
var num = parseFloat("3.5");
console.log("parseFloat: " + num);
var num2 = parseInt("35");
console.log("parseInt: " + num2);

// Limits
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
console.log("Number Limits: ", biggestNum, smallestNum, infiniteNum, negInfiniteNum, notANum);

var biggestInt = Number.MAX_SAFE_INTEGER; //(253 - 1) => 9007199254740991;
var smallestInt = Number.MIN_SAFE_INTEGER;  //-(253 - 1) => -9007199254740991;
console.log("Integer Limits (SAFE): ", biggestInt, smallestInt);

// Math is a built-in object that has properties and methods for mathematical
// constants and functions. Not a function object.
//
// Math works with the Number type. It doesn't work with BigInt.
//
console.log("Constants: ", Math.E, Math.PI, Math.LN10);
for (var i = -180; i <= 180; i+=45)
    console.log("Math.abs: ", Math.abs(i));
for (var i = 0; i < 10; i++)
    console.log("Math.random: ", Math.random());
for (var i = -180; i <= 180; i+=45) {
    console.log("Math.sin: ", Math.sin(i));
    console.log("Math.cos: ", Math.cos(i));
    console.log("Math.tan: ", Math.tan(i));
}
[0, 0.3, 0.5, 0.8, 1.0].forEach(e => {
    console.log(e + " Math.ceil: ", Math.ceil(e));
    console.log(e + " Math.floor: ", Math.floor(e));
    console.log(e + " Math.round: ", Math.round(e));
});
[0, 0.3, 0.5, 0.8, 1.0].forEach(e => {
    console.log(e + " Math.log: ", Math.log(e));
    console.log(e + " Math.exp: ", Math.exp(e));
});
[0, 0.3, 0.5, 0.8, 1.0].forEach(e => {
    console.log(e + " Math.min (.5) : ", Math.min(e, .5));
    console.log(e + " Math.max (.5) : ", Math.max(e, .5));
});


// Random numbers between range
var min = 1, max = 10;
for (var i = 0; i < 10; i++)
    console.log("Random decimals 1-10: ", Math.random() * (max - min) + min);

for (var i = 0; i < 10; i++)
    console.log("Random with Math.floor 1-10: ", Math.floor(Math.random() * (max - min + 1)) + min);
