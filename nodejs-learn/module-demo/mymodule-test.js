mymodule = require("./mymodule");
console.log("test: mymodule.greeting() = " + mymodule.greeting());
console.log("test: mymodule.message2 = " + mymodule.message2);

// To tell whether this script is a module or direct script invoke by node
// we can test like this:

// console.log("this script module ", module);
// console.log("require.main: ", require.main);
if (require.main === module) {
    console.log("We are running a script!");
}
