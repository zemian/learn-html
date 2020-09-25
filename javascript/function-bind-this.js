// See "this-var.js" also.
//
// Here we can change a function context ("this") explicitly.
//
let person = {
    name: "Zemian"
};

// This function context is bound to window by default, not to the "person" object
// so this means "this.name" will fail if you run it.
function printName() {
    console.log(this.name);
}
printName(); // This prints undefined.

// However we can change the function context with Function.bind()
let personPrintName = printName.bind(person);
personPrintName(); // Now this will print "Zemian"
