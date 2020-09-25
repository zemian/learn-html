class MemberFunctionsExample {

    name = "Hello";

    constructor () {
        console.log("Constructor");
    }

    foo () {
        console.log(this.name + " foo.this", this);
    }

    // Class Member
    foo2 = function () {
        console.log(this.name + " foo2.this", this);
    };

    foo3 = () => {
        console.log(this.name + " foo3.this", this);
    };

    // NOTE: You can't declare function inside Class with 'function' keyword
    // You can however declare nested function inside a member function.
    //
    // // This will not compile inside a TS Class:
    //   function badFunctionSyntax() {
    //   }
    // A nested function inside a member function is OK.
    nestedFunction () {
        function getSpecialName () {
            return "Hello";
        }
        console.log(getSpecialName());
    }
}

var a = new MemberFunctionsExample();
a.foo();
a.foo2();
a.foo3();
