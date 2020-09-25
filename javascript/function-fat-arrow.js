var f1 = function() {
    console.log("Normal function");
};
var f2 = function(args) {
    console.log("Function with args: ", args);
};
f1();
f2("Hello");

var f3 = () => console.log("Fat arrow function");
var f4 = (args) => console.log("Fat arrow function with args", args);
f3();
f4("Hello2");

// NOTE: When there is at one arg, then parenthesis is actually not needed!
var f4b = args => console.log("Fat arrow function with args", args);

// NOTE: But if you have more than one arguments, then parenthesis is needed again!
var f4c = (p1, p2) => console.log("Fat arrow function with args", args);

function myfun(func) {
    console.log("Invoking func param.");
    func.apply();
}
myfun(() => console.log("Hello"));

// This is not valid syntax. Fat arrow requires "() => statement" form, even
// with empty argument.
// var f5 = (=> console.log("Fat arrow function"));
