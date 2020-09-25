import helloAssignInstance = require("./my-export-assignment-instance");
console.log(helloAssignInstance);

// Using different import form:
// Note this form require you to export module instance with a indirect
// variable!
import * as helloAssignInstance2 from "./my-export-assignment-instance";
console.log(helloAssignInstance2);

/* This will not compile!
// Since we did not export with specific name, we cant use this import form
import {helloAssignInstance} from "./my-export-assignment-instance";
*/
