// Node Error
// https://nodejs.org/api/errors.html

/*
 Exceptions vs. Errors#
 A JavaScript exception is a value that is thrown as a result of an invalid
 operation or as the target of a throw statement. While it is not required that
 these values are instances of Error or classes which inherit from Error, all
 exceptions thrown by Node.js or the JavaScript runtime will be instances of Error.

 Some built-in errors:
     EvalError
     InternalError
     RangeError
     ReferenceError
     SyntaxError
     TypeError
     URIError
 */
function demo1() {
    require('url').parse(() => { });
}
function demo2() {
    var ans = 1 / 0; // NOTE: This is NOT an error!
    console.log(ans);
}
function demo3() {
    try {
        console.log("Throwing error string");
        throw "oops";
    } catch (e) {
        console.log("Catched error: ", e);
    }
}
function demo4() {
    try {
        console.log("Throwing error object");
        throw new Error("oops");
    } catch (e) {
        // console.log("Error attributes:");
        // for (var k in e)
        //     console.log("e: " + k);

        console.log("e.name", e.name);
        console.log("e.message", e.message);
        console.log("e.stack", e.stack); /* Non-standard, use toString() instead. !*/

        console.log("Catched error: ", e);
    }
}
function demo5() {
    function foo() {
        try {
            console.log("Throwing error string");
            throw "oops";
        } catch (e) {
            console.log("Catched error: ", e);
            return "foo";
        } finally {
            console.log("Finally is here.");
        }
    }
    console.log("Calling foo: ", foo());
}
demo5();
