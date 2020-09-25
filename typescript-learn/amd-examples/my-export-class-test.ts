import {HelloClass1} from "./my-export-class-one";
import {HelloClassMany1, HelloClassMany2} from "./my-export-class-many";
console.log(new HelloClass1(), new HelloClassMany1(), new HelloClassMany2());

/* This will not compile:
NOTE: You can't import and remap the classname!

import {HelloClass1b} from "./my-export-class-one";
 */
