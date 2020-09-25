function MyClass() {
    console.log("MyClass.this=");
    console.log(this);

    function MyClass2() {
        console.log("MyClass2.this=");
        console.log(this);
    }
    this.myClass2 = new MyClass2();
}
new MyClass();

console.log("========================");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
/*
 A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

 In most cases, the value of this is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).
 */
var test = {
    prop: 42,
    func: function() {
        console.log(this);
        this.x = 99;
        return this.prop;
    },
};

console.log(test.func());
// expected output: 42
console.log(test.x);

console.log("========================");
var test2 = {
    foo: "test",
    fn: function() {
        // this is test2
        console.log("fn this: ", this);
    },
    bar: {
        fn2: function() {
            // this is "bar"
            console.log("fn2 this: ", this);
        }
    }
};
console.log("test2", test2);
console.log("test2 test2.fn(): ", test2.fn());
console.log("test2 test2.bar.fn2(): ", test2.bar.fn2());
