export class MyBase {
    hello() {
        console.log("Base");
    }
}
export class MyClass extends MyBase {
    hello() {
        console.log("Hello World");
    }
}

console.log(new MyClass().hello());
