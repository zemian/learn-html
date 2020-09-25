var requirejs = require('requirejs');

requirejs(['../amd-examples/namespace-singleton'], function(namespaceingleton) {
   console.log("namespacedemo: ", namespaceingleton);
   console.log("namespacedemo.name: ", namespaceingleton.name);
   console.log("namespaceingleton.hello.greeting(): ", namespaceingleton.hello.greeting());
});
