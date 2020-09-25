let foolib = require("./foolib-default");
console.log("foolib", foolib);

// Note that 2nd call to require will create new instance!
let foolib2 = require("./foolib-default");
console.log("foolib2", foolib2);
