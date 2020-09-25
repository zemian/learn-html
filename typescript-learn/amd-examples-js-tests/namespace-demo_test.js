var requirejs = require('requirejs');

requirejs(['../amd-examples/namespace-demo'], function(namespacedemo) {
   console.log("namespacedemo: ", namespacedemo);
   console.log("namespacedemo.mynsdemo: ", namespacedemo.mynsdemo);
   console.log("namespacedemo.mynsdemo.Hello(): ", new namespacedemo.mynsdemo.Hello().greeting());
});
