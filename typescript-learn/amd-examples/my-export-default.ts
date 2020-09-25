/*
The difference between "export" and "export default" are:

- "export" is for multiple names to be exported in a file, and the name MUST be
matching when importing for use.
- "export default" is for single name exported in a file, and the name CAN be
renamed to any value when importing for use.

NOTE: The generated JS code for "export default" is simply using "default()"
and not even using the class name.

// NOTE: TS "export default" is more intend for TS import use only.
// Plain RequireJS still works, but it will NOT be pretty.

 */
export default class Hello5 {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}
