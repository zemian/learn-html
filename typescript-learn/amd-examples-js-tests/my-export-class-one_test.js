var requirejs = require('requirejs');

// By convention, class should import as all CapCamelCase.
// By convention, instance should import as lower case varWithCamelCase.
// By convention, module should import as all lowercase word.
requirejs(['../amd-examples/my-export-class-one'], function(myexportclassone) {
   console.log("myexportclassone.HelloClass1: ", myexportclassone.HelloClass1);
   new myexportclassone.HelloClass1().greeting();
});
