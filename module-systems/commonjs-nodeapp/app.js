console.log("app require", require);
console.log("app exports", exports);
console.log("app module", module);

let lib1 = require("./app-lib1");
console.log("lib1", lib1);
let lib2 = require("./app-lib2");
console.log("lib2", lib2);
