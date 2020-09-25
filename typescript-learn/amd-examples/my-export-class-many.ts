/*
A normal "export" is used in a module to export one or more named objects.
The user must import the same exact name to use it.
 */
class HelloClassMany1 {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}
class HelloClassMany2 {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}

export {HelloClassMany1, HelloClassMany2};
