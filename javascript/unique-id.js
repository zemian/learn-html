// https://gist.github.com/gordonbrander/2230317

// == Base36 (numbers + letters) Unique ID
/*
NOTE: This is okay for generating less than 10 thousand unique IDs, but any more than 10 thousand and you
are going to run into collisions.
 */
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

for (let i = 0; i < 10; i++)
    console.log("ID", ID());

// == HexId
let hexId = function () {
    return Math.floor(Math.random() * 1_000_000).toString(16);
};
for (let i = 0; i < 10; i++)
    console.log("hexId", hexId());

// == Floating ID
let floatId = function () {
    return Math.random();
};
for (let i = 0; i < 10; i++)
    console.log("floatId", floatId());

// == Hex ID #2
let hexId2 = function () {
    return Math.random().toString(16).substr(2, 6);
};
for (let i = 0; i < 10; i++)
    console.log("hexId2", hexId2());
