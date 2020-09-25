export interface MyInterface {
    hello();
}
export class MyBase {
    constructor() {
    }
}
export class MyBase2 {
    constructor() {
    }
}

/**
 * This will not compile. You can only extend one class.
export class MyMiddleBase extends MyBase, MyBase2 implements MyInterface {
    // NOTE: sub-class must call super class constructor.
    constructor() {
        super();
    }
    hello() {
        console.log("Hello World");
    }
}
*/
