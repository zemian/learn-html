class Foo {
    constructor(name) { this.name = name; }
    toString() { return this.name }
}

it("test", function () {
    // console.log(object) does not invoke .toString()!
    const foo = new Foo('Zemian');
    console.log(foo); // Notice this does not call .toString()!
    console.log('' + foo); // This will do the trick!
});
