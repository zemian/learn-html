/*
JS semicolon is optional, but using it can avoid certain hard to debug coding error.

JS semicolon is optional because the engine itself has Automatic Semicolon Insertion (ASI)
feature. It will tries to insert it for you if you don't have it.

In general, using explicit semicolon in code makes code more clear and avoid confusion that
sometimes ASI will not able to perform properly. Use semicolon on each statements, especially
the assignments. The only time we do not use semicolon is when defining functions.

NOTE: Often times we write JS in multi-lines of a single statement, so adding a semicolon at
the end seems little odd and out of place, but trace carefully on the original statement
then we can quickly determine whether we need it or not. This also bring up another good
practice is we should not make single statement too long (fitting into a single screen
is a good practice!).

REF:
- http://www.ecma-international.org/ecma-262/7.0/index.html#sec-rules-of-automatic-semicolon-insertion
- https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi
 */

function foo () {
    console.log("Foo");
} // NOTE: No semicolon used here since it's a global function definition

function FooClass () {
    this.foo = "Foo";
    this.bar = {
        bar: "Bar",
        barList: [1, 2, 3]
    }; // NOTE: Use semicolon since this ends the assignment

    this.fooFunction = function (p1) {
        console.log("fooFunction.p1", p1);
    };  // NOTE: Use semicolon since this ends the assignment
} // NOTE: No semicolon used here since it's a function definition

FooClass.prototype.barFunction = function () {

}; // NOTE: Use semicolon since this ends the assignment

// == Common Lack of Semicolon Problems
// http://www.bradoncode.com/blog/2015/08/26/javascript-semi-colon-insertion/

// Problem1: return keyword
console.log("Problem1: return keyword");
var foo = function() {
    var bar = 'baz'
    return
    {
        bar: bar
    }
}
console.log(foo());
// Output: undefined
// This is because "return" syntax not suppose to have line-break! The line-break triggered an ASI
// hence it result is "undefined". To correct it, we can do
//   return {
//     bar: bar
//   };

// Example2: run-in variables
console.log("Example2: run-in variables");
var foo
bar = 2;

console.log(foo);
console.log(bar);

// Example3: https://flaviocopes.com/javascript-automatic-semicolon-insertion/
function example3 () {
    const hey = 'hey'
    const you = 'hey'
    const heyYou = hey + ' ' + you

        ['h', 'e', 'y'].forEach((letter) => console.log(letter))
}
// example3();

// Example4: https://flaviocopes.com/javascript-automatic-semicolon-insertion/
function example4 () {
    const a = 1
    const b = 2
    const c = a + b
    (a + b).toString()
}
// example4();
