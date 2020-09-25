/*
// == Indexable Types
There are two types of supported index signatures: string and number. It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer.
 */

// Readonly
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray = ["Alice", "Bob"];
myArray[0] = "Zemian";
// myArray[0] = 99;
console.log(myArray);


// Readonly
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[0] = "Zemian";
// myArray2[0] = 99;
console.log(myArray2);
