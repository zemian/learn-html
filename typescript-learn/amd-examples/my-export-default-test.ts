import Hello5 from "./my-export-default";
console.log(new Hello5());

// This should work the same
import Hello5b from "./my-export-default-end-of-line";
console.log(new Hello5b());

// Note that you can rename class with "export default"
import MyHello5 from "./my-export-default";
console.log(new MyHello5());

/* This will not compile!
// NOTE: You can use "import * as" form for "export default".
import * as mylib from "./my-export-default";
console.log(new mylib.Hello5());
 */
