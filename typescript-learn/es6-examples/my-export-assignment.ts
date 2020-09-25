class Hello3 {
    message = "World3";
    greeting() {
        console.log(this.message);
    }
}

// You can do "export =" with ECMAScript target.

// You can't use "export =" while this module contains other "export" statement!
// This only works if you have this were the only statement.
// export = Hello3;
