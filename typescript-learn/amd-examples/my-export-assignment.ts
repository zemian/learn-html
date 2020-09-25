/*
The "export =" is TS way of exporting single object in module. When translated
to RequireJS, it will use "return" instead of "exports" assignment.


To use it, you must use the "import myModule = require("my-module")" form.
Note: that "myModule" can be any name!
 */
class Hello3 {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}
//
// NOTE if you forget to use "export =" here, then the generated JS script
// will not error, but will not have the "define()" part wrapper!
//
// And if you forget just the "=" part, then generated JS will use the
// "exports" variable.
export = Hello3;
