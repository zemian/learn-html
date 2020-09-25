
// We call "MyClass" as constructor function!
function MyClass() {
    this.p1 = "p1";
    this.p2 = true;
}
console.log(new MyClass());
console.log(MyClass()); // can't do this, it will return "undefined"

// ES6 "class" syntax is same as above!
class MyClass2 {
    constructor() {
        this.p1 = "p1";
        this.p2 = true;
    }
}
console.log(new MyClass2());
// console.log(MyClass2()); // TypeError, you can't do this!

// == "this" can exists on object literal as well
const a = {
    name: "Zemian",
    greeting: function () {
        return "Hello " + this.name;
    }
};
console.log(a.greeting());

// == Anonymous function constructor
var viewModel = new function(bindingContext) {
  var self = this;
  self.foo = "bar";
  self.greeting = function(){ console.log('hi'); }
};
console.log(viewModel.foo);
viewModel.greeting();
