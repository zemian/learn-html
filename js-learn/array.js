assert = require("chai").assert;

it("basic array operations", function () {
// == JS Array basics
    var fruits = ['Apple', 'Banana'];
    console.log("fruits array: ", fruits.length, fruits);

    var first = fruits[0];
// Apple

    var last = fruits[fruits.length - 1];
// Banana

    fruits.forEach(function(item, index, array) {
        console.log("forEach: ", item, index, array);
    });
// Apple 0
// Banana 1

// Add to end of array
    var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

    var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

    var first = fruits.shift(); // remove Apple from the front
// ["Banana"];

    var newLength = fruits.unshift('Strawberry'); // add to the front
// ["Strawberry", "Banana"];

    fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

    var pos = fruits.indexOf('Banana');
// 1

// NOTE: "splice" is an odd method name for remove element
    var removedItem = fruits.splice(pos, 1); // this is how to remove an item "banana"
// ["Strawberry", "Mango"]

// More on removing items
    var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
    console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

    var pos = 1, n = 2;

    var removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

    console.log(vegetables);
// ["Cabbage", "Carrot"] (the original array is changed)

    console.log(removedItems);
// ["Turnip", "Radish"]

// Copy of an array - by slice: Returns a section of an array.
    var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]

// JS array size can be auto update if you assign index out of range!
    var a2 = ["Strawberry", "Mango"];
    console.log("array length: a2 = ", a2.length);
    a2[100] = "Peach";
    console.log("array length updated: a2 = ", a2.length);

// == Array instance testing
    console.log("[] Is array = ", Array.isArray([]));
    console.log("{} Is array = ", Array.isArray({}));

// == More ways to create array
    var a1 = new Array("Strawberry", "Mango", "Apple");
    console.log("array constructor: a1 = ", a1);
    var a2 = new Array(3);
    a2[0] = "one", a2[1] = "two", a2[2] = "three";
    console.log("array constructor: a2 = ", a2);

    var a3 = Array.from(['a', 'b', 'c']);
    console.log("array constructor: a3 = ", a3);

    var a4 = Array.of('a', 'b', 'c');
    console.log("array constructor: a4 = ", a4);

//NOTE: split without argument will return entire string as ONE element!
    var a5 = "abcdef".split("");
    console.log("array constructor: a5 = ", a5);

// == Special Array when using Regex
// Creating an array using the result of a matchSection:  RegExp.exec, String.match, and String.replace

// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

    var myRe = /d(b+)(d)/i;
    var myArray = myRe.exec('cdbBdbsbz');
    console.log("Regex matched array=", myArray);
    console.log("Regex matched array.input=", myArray.input); // original string against which the regular expression was matched
    console.log("Regex matched array.index=", myArray.index); // zero-based index of the match in the string
    console.log("Regex matched array.groups=", myArray.groups);
    console.log("Regex matched array[0]=", myArray[0]); // the last matched characters
    console.log("Regex matched array[1]=", myArray[1]); // 1..n specify the parenthesized substring matches
    console.log("Regex matched array[2]=", myArray[2]);

// More on array operations
    var ary = new Array(10);
    ary.fill('x');
    console.log("ary.fill: ", ary);

    var ary = "abcdefg".split("");
    console.log("ary.reverse: ", ary.reverse()); // This modify the array in place!
    console.log("ary after reverse: ", ary);
    console.log("ary.sort: ", ary.sort()); // This modify the array in place!
    console.log("ary after sort: ", ary);

    console.log("ary.join: ", ary.join('-'));
    console.log("ary.concat: ", ary.concat([1, 2, 3]));
    console.log("ary.includes: ", ary.includes('b')); // It checks only ONE item!

// == Functional methods
    var ary = "abcdefg".split("");
    console.log("ary.every is number: " + ary.every(e => typeof e === 'number')); // match all items to true
    console.log("ary.every is string: " + ary.every(e => typeof e === 'string'));
    console.log("ary.filter gt 'c': " + ary.filter(e => e > 'c')); // Filter ALL items
    console.log("ary.find gt 'c': " + ary.find(e => e > 'c')); // Find only ONE items
    console.log("ary.filter gt 'x': " + ary.filter(e => e > 'x')); // Empty array if none matched
    console.log("ary.find gt 'x': " + ary.find(e => e > 'x')); // undefined if none matched
    console.log("ary.findIndex gt 'c': " + ary.findIndex(e => e > 'c'));
    console.log("ary.findIndex gt 'x': " + ary.findIndex(e => e > 'x')); // -1 if not found
    console.log("ary.some gt 'c': " + ary.some(e => e > 'c')); // at least one match
    console.log("ary.some gt 'x': " + ary.some(e => e > 'x')); // return false if no match
    console.log("ary.map to cap " + ary.map(e => e.toUpperCase()));
    var aryToMap = ary.reduce((map, item) => {
        map[item] = item.toUpperCase();
        return map;
    }, {});
    console.log("ary.reduce (array to map) ", aryToMap);

// == Iteration methods
    var ary = "abcdefg".split("");
    ary.forEach(e => console.log("ary.forEach: " + e));

// For ... of loop
    for (const [index, element] of ary.entries())
        console.log("ary.entries " + index, element);
    for (const e of ary.keys())
        console.log("ary.keys " + e);
    for (const e of ary.values())
        console.log("ary.values " + e);
    for (const e of ary)
        console.log("ary iterator " + e);

});

it("array swap elements", function () {
    function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        return array;
    }
    assert.deepEqual(swap(['a', 'b', 'c'], 0, 1), ['b', 'a', 'c']);
    assert.deepEqual(swap(['a', 'b', 'c'], 0, 2), ['c', 'b', 'a']);
    assert.deepEqual(swap(['a', 'b', 'c'], 1, 2), ['a', 'c', 'b']);
    assert.deepEqual(swap(['a', 'b', 'c'], 2, 0), ['c', 'b', 'a']);
    assert.deepEqual(swap(['a', 'b', 'c', 'e', 'f', 'g'], 3, 4), ['a', 'b', 'c', 'f', 'e', 'g']);
});
