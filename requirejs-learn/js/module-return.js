define(function() {
    // We can return just about anything when defining a module.
    let ret0 = {}; // This is same as not return anything.

    let ret1 = {
        message: "Hello"
    };

    let ret2 = function() {
       console.log("Hello from function");
    };

    function Demo() {
        this.message = "Hello World";
        this.greet = function() {
            console.log(this.message);
        }
    }
    let ret3 = new Demo();

    return ret3;
});
