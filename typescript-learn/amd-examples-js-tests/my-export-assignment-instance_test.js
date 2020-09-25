var requirejs = require('requirejs');

// By convention, class should import as all CapCamelCase.
// By convention, instance should import as lower case varWithCamelCase.
// By convention, module should import as all lowercase word.
requirejs(['../amd-examples/my-export-assignment-instance'], function(helloAssignInstance) {
   console.log("helloAssignInstance: ", helloAssignInstance);
   helloAssignInstance.greeting();
});
