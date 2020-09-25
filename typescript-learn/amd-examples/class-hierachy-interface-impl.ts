export interface MyInterface {
    hello();
}
export class MyBase {
    constructor() {
    }
}
export class MyMiddleBase extends MyBase implements MyInterface {
    // NOTE: sub-class must call super class constructor.
    constructor() {
        super();
    }
    hello() {
        console.log("Hello World");
    }
}
export class MyClass extends MyMiddleBase{
}
