// Object type declaration
//declare function create(o: object | null): void;
function create(o: object | null) {
    console.log("Creating object:=", o);
}
class MyData {
    demoTypes() {
        // Boolean
        let isDone: boolean = false;

        // Numbers
        let decimal: number = 6;
        let hex: number = 0xf00d;
        let binary: number = 0b1010;
        let octal: number = 0o744;

        let n1 = 6.00;
        let n2 = 6;
        console.log("Compare n1 == n2", n1 == n2);

        // String
        let color: string = "blue";
        color = 'red';
        console.log("color=", color);

        let fullName: string = `Bob Bobbington`;
        let age: number = 37;
        let sentence: string = `Hello, my name is ${ fullName }.`
        console.log("sentence", sentence);

        // List/Array
        console.log("List demos");
        let list: number[] = [1, 2, 3];
        console.log(list);

        let list2 = [1, 2, 3];
        console.log(list2);

        let list3: Array<number> = [1, 2, 3];
        console.log(list3);

        // Declare a tuple type
        let x: [string, number];
        // Initialize it
        x = ["hello", 10]; // OK
        // Initialize it incorrectly
        //x = [10, "hello"]; // Error

        enum Color {Red, Green, Blue}
        let c: Color = Color.Green;
        console.log("Enum", c);

        // Any type
        let notSure: any = 4;
        notSure = "maybe a string instead";
        notSure = false; // okay, definitely a boolean

        // object type
        console.log("Object type");
        create({ prop: 0 }); // OK
        create(null); // OK

        // create(42); // Error
        // create("string"); // Error
        // create(false); // Error
        // create(undefined); // Error

        // Type cast/assertion
        let someValue: any = "this is a string";
        let strLength: number = (<string>someValue).length;
        console.log("strLength=", strLength);

        // alternative of cast using 'as'
        let someValue2: any = "this is a string";
        let strLength2: number = (someValue as string).length;
    }
}
new MyData().demoTypes();
