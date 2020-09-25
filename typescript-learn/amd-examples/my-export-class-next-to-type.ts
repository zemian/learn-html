/*
This is same as the "my-export-class-one.ts" example, except we placing the "export"
on same level as the class instead of placing them all at the end of the file.
 */
export class Hello4 {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}
