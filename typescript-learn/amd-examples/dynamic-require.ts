declare function require(moduleName: string): any;
if (1 * 1 == 1) {
    let Hello3 = require("./my-export-assignment");
    let a = new Hello3();
    console.log(a);
}
