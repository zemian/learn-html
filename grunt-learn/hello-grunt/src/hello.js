/*
DEMO: Use "underscore" as dependency
https://underscorejs.org/

*/

// Using underscore libraries function
const _ = require("underscore");
_.each([1, 2, 3], (num) => console.log(num));
console.log(_.map([1, 2, 3], function(num){ return num * 3; }));

// Print what's available in the "_" object.
for (let k of _.keys(_)) {
    console.log(k);
}
