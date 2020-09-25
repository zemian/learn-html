/*
Note that "export=" work differently for Class name vs Instance!
 */
class HelloAssignInstance {
    message = "Hello World";
    greeting() {
        console.log(this.message);
    }
}

/*
// Exporting new instance directly
// To use this form, you can enable compiler option: "--esModuleInterop"
// And user must use "myModule.default" prefix
export = new HelloAssignInstance();
*/

// TODO: Is this a bug?
// Exporting new instance using a indirect variable
// NOTE: For some reason this form allow user to use this import form:
//    import * as myInstance from "./my-export-assignment-instance";
let result = new HelloAssignInstance();
export = result;
