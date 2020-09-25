var requirejs = require('requirejs');

// By convention, class should import as all CapCamelCase.
// By convention, instance should import as lower case varWithCamelCase.
// By convention, module should import as all lowercase word.
requirejs(['../amd-examples/my-export-assignment'], function(Hello3) {
   console.log("Hello3: ", Hello3);
   new Hello3().greeting();
});
